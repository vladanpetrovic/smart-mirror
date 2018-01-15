import {ActionReducerMap} from '@ngrx/store';
import {
    QuoteState, ReminderState,
    ToDoState, UserState, WeatherState,
    apiQuoteReducer,
    apiReminderReducer,
    apiToDoReducer,
    apiUserReducer,
    apiWeatherReducer
} from 'api-client';

export interface AppState {
    quote: QuoteState,
    reminders: ReminderState,
    todos: ToDoState,
    user: UserState,
    weather: WeatherState
}

export const reducers: ActionReducerMap<AppState> = {
    quote: apiQuoteReducer,
    reminders: apiReminderReducer,
    todos: apiToDoReducer,
    user: apiUserReducer,
    weather: apiWeatherReducer
};