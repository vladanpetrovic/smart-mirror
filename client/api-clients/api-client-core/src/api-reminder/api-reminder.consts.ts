import {getApiEndpointUrl} from '../api.consts';

export const REMINDER_STORE_NAME = 'reminders';

export const REMINDER_EVENT_STREAM_URL = 'http://localhost:9193/event/stream';

export function getReminderEventStreamByUserIdUrl(userId: string) {
    return REMINDER_EVENT_STREAM_URL + userId;
}

export function getApiRemindersUrl() {
    return getApiEndpointUrl('/reminder/data/reminders');
}

export function getApiReminderByIdUrl(reminderId: string) {
    return getApiRemindersUrl() + reminderId;
}

export function getApiRemindersByUserIdUrl() {
    return getApiRemindersUrl() + '/search/findByUserId';
}