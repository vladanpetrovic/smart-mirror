import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Reminder, ReminderEventApiMessage, ReminderState} from './api-reminder.models';
import {ApiGetRemindersAction, OnReminderEventChangeAction} from './api-reminder.actions';
import {REMINDER_STORE_NAME} from './api-reminder.consts';

@Injectable()
export class ApiReminderService {
    private eventSource = new EventSource('http://localhost:9193/event/stream');

    constructor(private store: Store<ReminderState>) {
        this.store.dispatch(new ApiGetRemindersAction());

        this.eventSource.onmessage = (me: MessageEvent) => {
            const reminderEvent = JSON.parse(me.data) as ReminderEventApiMessage;
            this.store.dispatch(new OnReminderEventChangeAction(reminderEvent));
        };
    }

    getReminders() {
        return this.store.select(REMINDER_STORE_NAME);
    }
}
