import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  txtCityName = "";
  cityName = "";
  temp = "";
  isLoading = false;
  constructor(private weatherService: WeatherService) {}
  
  ngOnInit() {}
  getWeather(){
    this.isLoading = true;
    this.cityName = this.txtCityName;
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => {
        this.temp = temp;
        this.isLoading = false;
        this.txtCityName = "";
    })
    .catch(err => {
      alert("Cannot find your city name!");
      this.isLoading = false;
      this.cityName = "";
      this.txtCityName = "";
    });
  }
  getMessage(){
    if(this.isLoading){
      return "Loading..."
    }
    return this.cityName==""? "Enter your city name" : (this.cityName + " is now " + this.temp)
  }
}
