import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {ReminderState} from "./api-reminder.models";
import {ApiGetRemindersAction} from './api-reminder.actions';
import {REMINDER_STORE_NAME} from './api-reminder.consts';

@Injectable()
export class ApiReminderService {

    constructor(private store: Store<ReminderState>) {
        this.store.dispatch(new ApiGetRemindersAction());
    }

    getReminders() {
        return this.store.select(REMINDER_STORE_NAME);
    }
}