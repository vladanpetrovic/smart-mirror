import {getApiEndpointUrl} from '../api.consts';

export const REMINDER_STORE_NAME = 'reminders';

export const REMINDER_EVENT_STREAM_URL = 'http://192.168.1.100:9193/event/stream/byUserId/';

export function getReminderEventStreamByUserIdUrl(userId: string) {
    return REMINDER_EVENT_STREAM_URL + userId;
}

export function getApiRemindersUrl() {
    return getApiEndpointUrl('/reminder/data/reminders');
}

export function getApiReminderFilterUrl() {
    return getApiEndpointUrl('/reminder/filter');
}

export function getApiReminderByIdUrl(reminderId: string) {
    return getApiRemindersUrl() + '/' + reminderId;
}

export function getApiRemindersByUserIdUrl() {
    return getApiRemindersUrl() + '/search/findByUserId';
}

export function getApiRemindersByUserIdAndForTodayUrl() {
    return getApiReminderFilterUrl() + '/getByUserIdAndForToday';
}

export function getApiRemindersByUserIdAndInFutureUrl() {
    return getApiReminderFilterUrl() + '/getByUserIdAndInFuture';
}

export function getApiRemindersByUserIdAndInPastUrl() {
    return getApiReminderFilterUrl() + '/getByUserIdAndInPast';
}

export const REMINDER_QUERIES = {
    DEFAULT: 'getApiRemindersByUserId',
    GET_REMINDERS_FOR_TODAY: 'getApiRemindersByUserIdAndForToday',
    GET_REMINDERS_IN_FUTURE: 'getApiRemindersByUserIdAndInFuture',
    GET_REMINDERS_IN_PAST: 'getApiRemindersByUserIdAndInPast'
};
