import {Action} from '@ngrx/store'
import {ReminderState} from './api-reminder.models';

export const REMINDER_ACTION_TYPES = {
    SET_REMINDERS_STATE: '[API Reminder] SET_REMINDERS_STATE',
    API_GET_REMINDERS: '[API Reminder] API_GET_REMINDERS'
};

export class SetRemindersStateAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.SET_REMINDERS_STATE;

    constructor(public payload: ReminderState) {}
}

export class ApiGetRemindersAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_GET_REMINDERS;
}

export type ReminderActions = SetRemindersStateAction | ApiGetRemindersAction;