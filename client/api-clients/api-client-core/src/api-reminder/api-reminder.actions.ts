import {Action} from '@ngrx/store';
import {Reminder, ReminderEventApiMessage, ReminderState} from './api-reminder.models';

export const REMINDER_ACTION_TYPES = {
    SET_REMINDERS_STATE: '[API Reminder] SET_REMINDERS_STATE',
    API_GET_REMINDERS: '[API Reminder] API_GET_REMINDERS',
    API_CREATE_REMINDER: '[API Reminder] API_CREATE_REMINDER',
    API_UPDATE_REMINDER: '[API Reminder] API_UPDATE_REMINDER',
    API_DELETE_REMINDER: '[API Reminder] API_DELETE_REMINDER',
    ON_REMINDER_EVENT_CHANGE: '[API Reminder] ON_REMINDER_EVENT_CHANGE'
};

export class SetRemindersStateAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.SET_REMINDERS_STATE;

    constructor(public payload: ReminderState) {
    }
}

export class ApiGetRemindersAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_GET_REMINDERS;

    constructor(public payload: String) {
    }
}

export class ApiCreateReminderAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_CREATE_REMINDER;

    constructor(public payload: Reminder) {
    }
}

export class ApiUpdateReminderAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_UPDATE_REMINDER;

    constructor(public payload: Reminder) {
    }
}

export class ApiDeleteReminderAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.API_DELETE_REMINDER;

    constructor(public payload: String) {
    }
}

export class OnReminderEventChangeAction implements Action {
    readonly type = REMINDER_ACTION_TYPES.ON_REMINDER_EVENT_CHANGE;

    constructor(public payload: ReminderEventApiMessage) {
    }
}

export type ReminderActions = SetRemindersStateAction | ApiGetRemindersAction
    | ApiCreateReminderAction | ApiUpdateReminderAction | ApiDeleteReminderAction
    | OnReminderEventChangeAction;
