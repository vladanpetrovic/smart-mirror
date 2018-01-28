import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getIdFromHateoasLink} from '../shared';
import {
    getApiReminderByIdUrl,
    getApiRemindersByUserIdAndForTodayUrl,
    getApiRemindersByUserIdAndInFutureUrl,
    getApiRemindersByUserIdAndInPastUrl,
    getApiRemindersByUserIdUrl,
    getApiRemindersUrl,
    REMINDER_QUERIES
} from './api-reminder.consts';
import * as fromReminderActions from './api-reminder.actions';
import {Reminder, ReminderApiResponse, ReminderStatePayload} from './api-reminder.models';

@Injectable()
export class ApiReminderEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetReminders$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_GET_REMINDERS)
        .map((action: fromReminderActions.ApiGetRemindersAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<ReminderApiResponse>(
                getApiRemindersByUserIdUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((reminderApiResponse) => {
            const reminders = [];
            for (const reminder of reminderApiResponse._embedded.reminders) {
                reminders.push({
                    id: getIdFromHateoasLink(reminder._links.self.href),
                    title: reminder.title,
                    dateTime: reminder.dateTime,
                    category: reminder.category
                } as Reminder);
            }
            const remindersStatePayload = {
                queryType: REMINDER_QUERIES.DEFAULT,
                reminders: reminders
            } as ReminderStatePayload;
            return {
                type: fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE,
                payload: remindersStatePayload
            };
        });

    @Effect()
    apiGetRemindersForToday$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_GET_REMINDERS_FOR_TODAY)
        .map((action: fromReminderActions.ApiGetRemindersForTodayAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<Reminder[]>(
                getApiRemindersByUserIdAndForTodayUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((reminders) => {
            const remindersStatePayload = {
                queryType: REMINDER_QUERIES.GET_REMINDERS_FOR_TODAY,
                reminders: reminders
            } as ReminderStatePayload;
            return {
                type: fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE,
                payload: remindersStatePayload
            };
        });

    @Effect()
    apiGetRemindersInFuture$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_GET_REMINDERS_IN_FUTURE)
        .map((action: fromReminderActions.ApiGetRemindersInFutureAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<Reminder[]>(
                getApiRemindersByUserIdAndInFutureUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((reminders) => {
            const remindersStatePayload = {
                queryType: REMINDER_QUERIES.GET_REMINDERS_IN_FUTURE,
                reminders: reminders
            } as ReminderStatePayload;
            return {
                type: fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE,
                payload: remindersStatePayload
            };
        });

    @Effect()
    apiGetRemindersInPast$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_GET_REMINDERS_IN_PAST)
        .map((action: fromReminderActions.ApiGetRemindersInPastAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<Reminder[]>(
                getApiRemindersByUserIdAndInPastUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((reminders) => {
            const remindersStatePayload = {
                queryType: REMINDER_QUERIES.GET_REMINDERS_IN_PAST,
                reminders: reminders
            } as ReminderStatePayload;
            return {
                type: fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE,
                payload: remindersStatePayload
            };
        });

    @Effect({dispatch: false})
    apiCreateReminder$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_CREATE_REMINDER)
        .map((action: fromReminderActions.ApiCreateReminderAction) => {
            return action.payload;
        })
        .switchMap((reminder: Reminder) => {
            return this.httpClient.post<any>(
                getApiRemindersUrl(), reminder, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiUpdateReminder$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_UPDATE_REMINDER)
        .map((action: fromReminderActions.ApiUpdateReminderAction) => {
            return action.payload;
        })
        .switchMap((reminder: Reminder) => {
            return this.httpClient.patch<any>(
                getApiReminderByIdUrl(reminder.id), reminder, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiDeleteReminder$ = this.actions$
        .ofType(fromReminderActions.REMINDER_ACTION_TYPES.API_DELETE_REMINDER)
        .map((action: fromReminderActions.ApiDeleteReminderAction) => {
            return action.payload;
        })
        .switchMap((reminderId: string) => {
            return this.httpClient.delete<any>(
                getApiReminderByIdUrl(reminderId), {
                    observe: 'body',
                    responseType: 'json'
                });
        });
}
