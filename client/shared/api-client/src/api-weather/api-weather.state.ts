import {Weather, WeatherState} from './api-weather.models';

export let initial: WeatherState = {
    weather: new Weather(0.0, 'wi-day-sunny')
};