import * as fromWeatherActions from './api-weather.actions';
import * as fromWeatherState from './api-weather.state';
import {WeatherState} from './api-weather.models';

export function apiWeatherReducer(state = fromWeatherState.weatherStateInitial,
                                  action: fromWeatherActions.WeatherActions): WeatherState {
    switch (action.type) {
        case fromWeatherActions.WEATHER_ACTION_TYPES.SET_WEATHER_STATE:
            return {
                ...state,
                ...(action as fromWeatherActions.SetWeatherStateAction).payload
            } as WeatherState;
        default:
            return state;
    }
}
