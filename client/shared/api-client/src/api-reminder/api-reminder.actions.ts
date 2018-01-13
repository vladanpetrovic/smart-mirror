import {Action} from '@ngrx/store'

export const TYPES = {
    GET_REMINDERS: '[API Reminder] GET_REMINDERS'
};

export class GetRemindersAction implements Action {
    readonly type = TYPES.GET_REMINDERS;
}

export type Actions = GetRemindersAction;