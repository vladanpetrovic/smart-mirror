import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'

import * as fromWeatherActions from "./api-weather.actions";
import {Weather, WeatherApiResponse} from './api-weather.models';
import {WEATHER_ICON_MAP} from "./api-weather.consts";

@Injectable()
export class ApiWeatherEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetWeather$ = this.actions$
        .ofType(fromWeatherActions.TYPES.API_GET_WEATHER)
        .switchMap((action: fromWeatherActions.ApiGetWeatherAction) => {
            return this.httpClient.get<WeatherApiResponse>('http://localhost:8080/api/weather/current', {
                observe: 'body',
                responseType: 'json'
            })
        })
        .map((weatherApiResponse) => {
            console.log('weatherApiResponse!');
            console.log(weatherApiResponse);
            const icon = weatherApiResponse.weather[0].icon;
            const weather = new Weather(
                weatherApiResponse.main.temp,
                WEATHER_ICON_MAP.get(icon));
            return {
                type: fromWeatherActions.TYPES.SET_WEATHER_STATE,
                payload: weather
            }
        });
}