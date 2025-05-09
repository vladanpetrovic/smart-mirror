import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';

import {WeatherState} from './api-weather.models';
import {ApiGetWeatherAction} from './api-weather.actions';
import {WEATHER_STORE_NAME} from './api-weather.consts';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiWeatherService {

    constructor(private store: Store<ApiCoreState>) {
        this.store.dispatch(new ApiGetWeatherAction());
        Observable.interval(1 * 60 * 1000).subscribe(() => {
            this.store.dispatch(new ApiGetWeatherAction());
        });
    }

    currentWeather() {
        return this.store.select(WEATHER_STORE_NAME);
    }
}
