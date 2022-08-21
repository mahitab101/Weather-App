import { Component, OnInit } from '@angular/core';
import { WetherService } from 'src/app/Services/wether.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
 weather:any;
 currentDate = Date.now();
 isLoading:boolean= false;
 timeline :any[] = [];
 weatherNow:any;
  constructor(private wetherService:WetherService) { }

  ngOnInit(): void {
    // this.getLocation();
    this.wetherService.getWeatherForecast().subscribe(data=>{
      this.getTodayForecast(data)
      console.log("data>>>",data)
    })
  }

  getLocation(){
    this.wetherService.getWeatherForecast().subscribe(data=>{
      this.isLoading=false;
      this.weather = data;
      console.log("inside getlocation when Call service",data)
    },
    error => {
      this.isLoading=true;
      console.log(error)
    }
    )
  }

  //get date range 
  dateRange():any{
    const start = new Date();
    start.setHours(start.getHours()+(start.getTimezoneOffset()/60));
    const to  = new Date(start);
    to.setHours(to.getHours() + 2,to.getMinutes() + 59,to.getSeconds() + 59);
  }

  //every 3 hours
  getTodayForecast(today:any){
    for (const forecast of today.list.slice(0, 8)){
          this.timeline.push({
            time:forecast.dt_txt,
            temp:forecast.main.temp
        });
        const apiDate = new Date(forecast.dt_txt).getTime();
        if (this.dateRange().start.getTime() <= apiDate && this.dateRange().to.getTime() >= apiDate)
        {
          this.weatherNow= forecast;
          console.log("this.weatherNow>>>>>>",this.weatherNow)
        }
    }
  }

}
