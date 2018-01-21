import * as fromReminderActions from './api-reminder.actions';
import * as fromReminderState from './api-reminder.state';
import {ReminderState} from './api-reminder.models';

export function apiReminderReducer(state = fromReminderState.reminderStateInitial,
                                   action: fromReminderActions.ReminderActions) {
    switch (action.type) {
        case fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE:
            return {
                ...state,
                reminders: (action as fromReminderActions.SetRemindersStateAction).payload
            };
        case fromReminderActions.REMINDER_ACTION_TYPES.ON_REMINDER_EVENT_CHANGE:
            const reminderEvent = (action as fromReminderActions.OnReminderEventChangeAction).payload;
            const stateReminders = state.reminders;
            switch (reminderEvent.eventType) {
                case 'CREATED':
                    for (const todo of stateReminders) {
                        if (todo.id === reminderEvent.reminder.id) {
                            break;
                        }
                    }
                    stateReminders.push(reminderEvent.reminder);
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
            return {
                ...state,
                reminders: stateReminders
            };
        default:
            return state;
    }
}
