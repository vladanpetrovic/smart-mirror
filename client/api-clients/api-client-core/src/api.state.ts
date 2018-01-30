import {AuthState} from "./api-auth";
import {QuoteState} from "./api-quote";
import {ReminderState} from "./api-reminder";
import {ToDoState} from "./api-todo";
import {UserState} from "./api-user";
import {WeatherState} from "./api-weather";

export interface ApiCoreState {
    auth: AuthState;
    quote: QuoteState;
    reminders: ReminderState;
    todos: ToDoState;
    user: UserState;
    weather: WeatherState;
}