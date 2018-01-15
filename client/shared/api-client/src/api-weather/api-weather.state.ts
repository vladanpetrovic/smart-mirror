import {Weather, WeatherState} from './api-weather.models';

export let weatherStateInitial: WeatherState = {
    weather: new Weather(0.0, 'wi-day-sunny')
};