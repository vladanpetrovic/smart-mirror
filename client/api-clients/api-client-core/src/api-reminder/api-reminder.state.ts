import {ReminderState} from './api-reminder.models';

export let reminderStateInitial: ReminderState = {
    reminders: [],
    remindersForToday: [],
    remindersInFuture: [],
    remindersInPast: []
};
