import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from './weather.service';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss',
    '../../../../../node_modules/weathericons/css/weather-icons.css']
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  subscription: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this.weatherService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  weatherDefined() {
    return typeof this.weather !== 'undefined';
  }
}
