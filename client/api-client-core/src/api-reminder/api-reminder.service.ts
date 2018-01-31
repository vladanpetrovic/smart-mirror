import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromReminderActions from './api-reminder.actions';
import {getReminderEventStreamByUserIdUrl, REMINDER_STORE_NAME} from './api-reminder.consts';
import {Reminder, ReminderState, ReminderEventApiMessage} from './api-reminder.models';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiReminderService {
    private eventSource;

    constructor(private store: Store<ApiCoreState>) {
    }

    reminderState() {
        return this.store.select(REMINDER_STORE_NAME);
    }

    getByUserId(userId: string) {
        this.store.dispatch(new fromReminderActions.ApiGetRemindersAction(userId));
    }

    apiGetRemindersForToday(userId: string) {
        return this.store.dispatch(new fromReminderActions.ApiGetRemindersForTodayAction(userId));
    }

    apiGetRemindersInFuture(userId: string) {
        return this.store.dispatch(new fromReminderActions.ApiGetRemindersInFutureAction(userId));
    }

    apiGetRemindersInPast(userId: string) {
        return this.store.dispatch(new fromReminderActions.ApiGetRemindersInPastAction(userId));
    }

    create(reminder: Reminder) {
        return this.store.dispatch(new fromReminderActions.ApiCreateReminderAction(reminder));
    }

    update(reminder: Reminder) {
        return this.store.dispatch(new fromReminderActions.ApiUpdateReminderAction(reminder));
    }

    delete(reminderId: string) {
        return this.store.dispatch(new fromReminderActions.ApiDeleteReminderAction(reminderId));
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getReminderEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const reminderEvent = JSON.parse(me.data) as ReminderEventApiMessage;
            this.store.dispatch(new fromReminderActions.OnReminderEventChangeAction(reminderEvent));
        };
    }
}
