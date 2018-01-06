import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { Weather } from './weather.model';

@Injectable()
export class WeatherService {
  iconMap: Map<string, string> = new Map<string, string>(
    [
      ['01d','wi-day-sunny'],
      ['02d','wi-day-cloudy'],
      ['03d','wi-cloudy'],
      ['04d','wi-cloudy-windy'],
      ['09d','wi-showers'],
      ['10d','wi-rain'],
      ['11d','wi-thunderstorm'],
      ['13d','wi-snow'],
      ['50d','wi-fog'],
      ['01n','wi-night-clear'],
      ['02n','wi-night-cloudy'],
      ['03n','wi-night-cloudy'],
      ['04n','wi-night-cloudy'],
      ['09n','wi-night-showers'],
      ['10n','wi-night-rain'],
      ['11n','wi-night-thunderstorm'],
      ['13n','wi-night-snow'],
      ['50n','wi-night-alt-cloudy-windy']
    ]
  );

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=44.82&lon=20.47&units=metric&APPID=9b6614f4c398327d053a801308719e44`)
      .map(openweather => {
        console.log(openweather);

        let icon = openweather.weather[0].icon;
        return new Weather(openweather.main.temp, this.iconMap.get(icon));
      });
  }
}
