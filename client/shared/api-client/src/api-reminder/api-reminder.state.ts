import {Reminder, ReminderState} from './api-reminder.models';

export let reminderStateInitial: ReminderState = {
    reminders: [
        new Reminder("123",
            "John Doe birthday",
            "2018-01-15T00:00:00.000",
            0),
        new Reminder("123",
            "Meeting at 12:00",
            "2018-01-15T00:00:00.000",
            0)
    ]
};