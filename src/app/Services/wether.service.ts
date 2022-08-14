import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WetherService {
  APIkey = '02259d883ad2f14c48a0d755c80c5261';
  URL = 'http://api.openweathermap.org/data/3.0/weather?' 
  constructor(private http: HttpClient) { }


  getCurrentWeather(lat:any,lon:any){
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','imperial')
    .set('appid','02259d883ad2f14c48a0d755c80c5261')

    return this.http.get(this.URL,{params});
  }

  getWeatherForecast(){
    return new Observable((observer)=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        observer.next(position)
      },
      (error)=>{
       observer.next(error)
      })
    }).pipe(
      map((value:any)=>{
        console.log('values',value)
       return new HttpParams()
        .set('lat',value.coords.latitude)
        .set('lon',value.coords.longitude)
        .set('units','imperial')
        .set('appid','02259d883ad2f14c48a0d755c80c5261')
    }),
      switchMap((values)=>{
        console.log('values',values)
        return this.http.get('http://api.openweathermap.org/data/2.5/weather', { params: values });
        // return this.http.get(this.URL, { params: values });

      })
    )
  }
}
