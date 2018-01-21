import {Action} from '@ngrx/store';
import {ReminderEventApiMessage, ReminderState} from './api-reminder.models';

export const REMINDER_ACTION_TYPES = {
    SET_REMINDERS_STATE: '[API Reminder] SET_REMINDERS_STATE',
    API_GET_REMINDERS: '[API Reminder] API_GET_REMINDERS',
    ON_REMINDER_EVENT_CHANGE: '[API Reminder] ON_REMINDER_EVENT_CHANGE'
};

export class SetRemindersStateAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.SET_REMINDERS_STATE;

    constructor(public payload: ReminderState) {
    }
}

export class ApiGetRemindersAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_GET_REMINDERS;
}

export class OnReminderEventChangeAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.ON_REMINDER_EVENT_CHANGE;

    constructor(public payload: ReminderEventApiMessage) {
    }
}

export type ReminderActions = SetRemindersStateAction | ApiGetRemindersAction | OnReminderEventChangeAction;
