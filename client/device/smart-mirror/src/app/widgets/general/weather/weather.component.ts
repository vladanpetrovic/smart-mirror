import { Component, OnInit } from '@angular/core';

import { ApiWeatherService, Weather } from 'api-client';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss',
    '../../../../../node_modules/weathericons/css/weather-icons.css']
})
export class WeatherComponent implements OnInit {
  weather: Observable<Weather>;

  constructor(private apiWeatherService: ApiWeatherService) { }

  ngOnInit() {
    this.weather = this.apiWeatherService.currentWeather();
  }

  weatherDefined() {
    return typeof this.weather !== 'undefined';
  }
}
