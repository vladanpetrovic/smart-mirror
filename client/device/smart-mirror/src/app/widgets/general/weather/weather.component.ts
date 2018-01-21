import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiWeatherService, Weather} from 'neatlicity-api-client-core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss',
        '../../../../../node_modules/weathericons/css/weather-icons.css']
})
export class WeatherComponent implements OnInit {
    weatherState: Observable<Weather>;

    constructor(private apiWeatherService: ApiWeatherService) {
    }

    ngOnInit() {
        this.weatherState = this.apiWeatherService.currentWeather();
    }

}
