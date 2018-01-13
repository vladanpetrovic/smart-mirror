import * as fromWeatherActions from "./api-weather.actions";
import * as fromWeatherState from "./api-weather.state";

export function apiWeatherReducer(state = fromWeatherState.initial, action: fromWeatherActions.Actions) {
    switch (action.type) {
        case fromWeatherActions.TYPES.SET_WEATHER_STATE:
            return {
                ...state,
                weather: (action as fromWeatherActions.SetWeatherStateAction).payload
            };
        default:
            return state;
    }
}