import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {WeatherState} from "./api-weather.models";

@Injectable()
export class ApiWeatherService {

    constructor(private store: Store<WeatherState>) { }

    currentWeather() {
        return this.store.select('weather');
    }
}