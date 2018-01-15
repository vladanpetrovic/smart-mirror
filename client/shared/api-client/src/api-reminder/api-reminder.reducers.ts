import * as fromReminderActions from "./api-reminder.actions";
import * as fromReminderState from "./api-reminder.state";

export function apiReminderReducer(state = fromReminderState.reminderStateInitial, action: fromReminderActions.ReminderActions) {
    switch (action.type) {
        case fromReminderActions.REMINDER_ACTION_TYPES.SET_REMINDERS_STATE:
            return {
                ...state,
                reminders: (action as fromReminderActions.SetRemindersStateAction).payload
            };
        default:
            return state;
    }
}