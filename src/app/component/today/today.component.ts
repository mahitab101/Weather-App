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
 isLoading:boolean= true;
  constructor(private wetherService:WetherService) { }

  ngOnInit(): void {
    this.getLocation();
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

}
