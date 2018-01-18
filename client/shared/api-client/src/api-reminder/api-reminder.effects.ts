import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getApiEndpointUrl} from '../api.consts';
import * as fromReminderActions from './api-reminder.actions';
import {Reminder, ReminderApiResponse} from './api-reminder.models';

@Injectable()
export class ApiReminderEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetReminders$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_GET_REMINDERS)
        .switchMap((action: fromReminderActions.ApiGetRemindersAction) => {
            return this.httpClient.get<ReminderApiResponse>(
                getApiEndpointUrl('/reminder/data/reminders'), {
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((reminderApiResponse) => {
            const reminders = [];
            for (const reminder of reminderApiResponse._embedded.reminders) {
                reminders.push(new Reminder(
                    '123',
                    reminder.title,
                    reminder.dateTime,
                    reminder.category
                ));
            }
            return {
                type: fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE,
                payload: reminders
            };
        });
}
