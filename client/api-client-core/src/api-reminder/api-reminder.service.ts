import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromReminderActions from './api-reminder.actions';
import {
    getApiReminderByIdUrl,
    getApiRemindersUrl,
    getReminderEventStreamByUserIdUrl,
    REMINDER_STORE_NAME
} from './api-reminder.consts';
import {Reminder, ReminderState, ReminderEventApiMessage} from './api-reminder.models';
import {ApiCoreState} from "../api.state";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()
export class ApiReminderService {
    private eventSource;

    constructor(private store: Store<ApiCoreState>,
                private httpClient: HttpClient) {
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
        return this.httpClient.post<any>(
            getApiRemindersUrl(), reminder, {
                observe: 'response',
                responseType: 'json'
            });
    }

    update(reminder: Reminder) {
        return this.httpClient.patch<any>(
            getApiReminderByIdUrl(reminder.id), reminder, {
                observe: 'response',
                responseType: 'json'
            });
    }

    delete(reminderId: string) {
        return this.httpClient.delete<any>(
            getApiReminderByIdUrl(reminderId), {
                observe: 'response',
                responseType: 'json'
            });
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getReminderEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const reminderEvent = JSON.parse(me.data) as ReminderEventApiMessage;
            this.store.dispatch(new fromReminderActions.OnReminderEventChangeAction(reminderEvent));
        };
    }
}
