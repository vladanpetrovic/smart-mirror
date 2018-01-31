import {ReminderState} from './api-reminder.models';

export let reminderStateInitial: ReminderState = {
    listByUserId: [],
    listForToday: [],
    listInFuture: [],
    listInPast: []
};
