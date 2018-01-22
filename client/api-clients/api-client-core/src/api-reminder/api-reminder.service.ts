import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromReminderActions from './api-reminder.actions';
import {getReminderEventStreamByUserIdUrl, REMINDER_STORE_NAME} from './api-reminder.consts';
import {Reminder, ReminderEventApiMessage, ReminderState} from './api-reminder.models';

@Injectable()
export class ApiReminderService {
    private eventSource;

    constructor(private store: Store<ReminderState>) {
    }

    reminderState() {
        return this.store.select(REMINDER_STORE_NAME);
    }

    getByUserId(userId: string) {
        this.store.dispatch(new fromReminderActions.ApiGetRemindersAction(userId));
    }

    create(reminder: Reminder) {
        this.store.dispatch(new fromReminderActions.ApiCreateReminderAction(reminder));
    }

    update(reminder: Reminder) {
        this.store.dispatch(new fromReminderActions.ApiUpdateReminderAction(reminder));
    }

    delete(reminderId: string) {
        this.store.dispatch(new fromReminderActions.ApiDeleteReminderAction(reminderId));
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getReminderEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const reminderEvent = JSON.parse(me.data) as ReminderEventApiMessage;
            this.store.dispatch(new fromReminderActions.OnReminderEventChangeAction(reminderEvent));
        };
    }
}
