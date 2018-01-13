import * as fromReminderActions from "./api-reminder.actions";
import * as fromReminderState from "./api-reminder.state";

export function reminderReducer(state = fromReminderState.initial, action: fromReminderActions.Actions) {
    switch (action.type) {
        case fromReminderActions.TYPES.GET_REMINDERS:
            return state;
        default:
            return state;
    }
}