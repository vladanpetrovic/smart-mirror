import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

import * as fromReminderActions from './api-reminder.actions';
import * as fromReminderState from './api-reminder.state';
import {ReminderState, ReminderStatePayload} from './api-reminder.models';
import {REMINDER_QUERIES} from './api-reminder.consts';

export function apiReminderReducer(state = fromReminderState.reminderStateInitial,
                                   action: fromReminderActions.ReminderActions): ReminderState {
    switch (action.type) {
        case fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE:
            const remindersStatePayload: ReminderStatePayload = (action as fromReminderActions.SetRemindersStateAction).payload;
            switch (remindersStatePayload.queryType) {
                case REMINDER_QUERIES.GET_REMINDERS_FOR_TODAY:
                    return {
                        ...state,
                        listForToday: remindersStatePayload.reminders
                    } as ReminderState;
                case REMINDER_QUERIES.GET_REMINDERS_IN_FUTURE:
                    return {
                        ...state,
                        listInFuture: remindersStatePayload.reminders
                    } as ReminderState;
                case REMINDER_QUERIES.GET_REMINDERS_IN_PAST:
                    return {
                        ...state,
                        listInPast: remindersStatePayload.reminders
                    } as ReminderState;
                default:
                    return {
                        ...state,
                        listByUserId: remindersStatePayload.reminders
                    } as ReminderState;
            }
        case fromReminderActions.REMINDER_ACTION_TYPES.ON_REMINDER_EVENT_CHANGE:
            const reminderEvent = (action as fromReminderActions.OnReminderEventChangeAction).payload;
            let stateReminders = state.listByUserId;
            const reminderDate = new Date(reminderEvent.reminder.dateTime);
            reminderEvent.reminder.dateTime = reminderDate.toDateString();
            const daysDiff = moment().diff(reminderDate, 'd');
            if (daysDiff === 0) {
                stateReminders = state.listForToday;
            } else {
                if (daysDiff < 0) {
                    stateReminders = state.listInFuture;
                } else {
                    stateReminders = state.listInPast;
                }
            }
            switch (reminderEvent.eventType) {
                case 'CREATED':
                    let exists = false;
                    for (const todo of stateReminders) {
                        if (todo.id === reminderEvent.reminder.id) {
                            exists = true;
                            break;
                        }
                    }
                    if (!exists) {
                        stateReminders.push(reminderEvent.reminder);
                    }
                    break;
                case 'UPDATED':
                    for (const todo of stateReminders) {
                        if (todo.id === reminderEvent.reminder.id) {
                            const index = stateReminders.indexOf(todo);
                            stateReminders[index] = reminderEvent.reminder;
                        }
                    }
                    break;
                case 'DELETED':
                    for (const todo of stateReminders) {
                        if (todo.id === reminderEvent.reminder.id) {
                            const index = stateReminders.indexOf(todo);
                            stateReminders.splice(index, 1);
                        }
                    }
                    break;
                default:
                    console.log(reminderEvent);
            }
            if (daysDiff === 0) {
                return {
                    ...state,
                    listForToday: stateReminders
                } as ReminderState;
            } else {
                if (daysDiff < 0) {
                    return {
                        ...state,
                        listInFuture: stateReminders
                    } as ReminderState;
                } else {
                    return {
                        ...state,
                        listInPast: stateReminders
                    } as ReminderState;
                }
            }
        default:
            return state;
    }
}
