import {Action} from '@ngrx/store'
import {WeatherState} from "./api-weather.models";

export const WEATHER_ACTION_TYPES = {
    SET_WEATHER_STATE: '[API Weather] SET_WEATHER_STATE',
    API_GET_WEATHER: '[API Weather] API_GET_WEATHER'
};

export class SetWeatherStateAction implements Action {
    readonly type = WEATHER_ACTION_TYPES.SET_WEATHER_STATE;

    constructor(public payload: WeatherState) {}
}

export class ApiGetWeatherAction implements Action {
    readonly type = WEATHER_ACTION_TYPES.API_GET_WEATHER;
}

export type WeatherActions = SetWeatherStateAction | ApiGetWeatherAction;