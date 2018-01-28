import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

import * as fromReminderActions from './api-reminder.actions';
import * as fromReminderState from './api-reminder.state';
import {ReminderState, ReminderStatePayload} from './api-reminder.models';
import {REMINDER_QUERIES} from './api-reminder.consts';

export function apiReminderReducer(state = fromReminderState.reminderStateInitial,
                                   action: fromReminderActions.ReminderActions) {
    switch (action.type) {
        case fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE:
            const remindersStatePayload: ReminderStatePayload = (action as fromReminderActions.SetRemindersStateAction).payload;
            switch (remindersStatePayload.queryType) {
                case REMINDER_QUERIES.GET_REMINDERS_FOR_TODAY:
                    return {
                        ...state,
                        remindersForToday: remindersStatePayload.reminders
                    };
                case REMINDER_QUERIES.GET_REMINDERS_IN_FUTURE:
                    return {
                        ...state,
                        remindersInFuture: remindersStatePayload.reminders
                    };
                case REMINDER_QUERIES.GET_REMINDERS_IN_PAST:
                    return {
                        ...state,
                        remindersInPast: remindersStatePayload.reminders
                    };
                default:
                    return {
                        ...state,
                        reminders: remindersStatePayload.reminders
                    };
            }
        case fromReminderActions.REMINDER_ACTION_TYPES.ON_REMINDER_EVENT_CHANGE:
            const reminderEvent = (action as fromReminderActions.OnReminderEventChangeAction).payload;
            let stateReminders = state.reminders;
            const reminderDate = new Date(reminderEvent.reminder.dateTime);
            const daysDiff = moment().diff(reminderDate, 'd');
            if (daysDiff === 0) {
                stateReminders = state.remindersForToday;
            } else {
                if (daysDiff > 0) {
                    stateReminders = state.remindersInFuture;
                } else {
                    stateReminders = state.remindersInPast;
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
                    remindersForToday: stateReminders
                };
            } else {
                if (daysDiff > 0) {
                    return {
                        ...state,
                        remindersInFuture: stateReminders
                    };
                } else {
                    return {
                        ...state,
                        remindersInPast: stateReminders
                    };
                }
            }
        default:
            return state;
    }
}
