import {getApiEndpointUrl} from '../api.consts';

export const TODO_STORE_NAME = 'todos';

export const TODO_EVENT_STREAM_URL = 'http://todo-rx.api.neatlicity.local.com/event/stream/byUserId/';

export function getToDoEventStreamByUserIdUrl(userId: string) {
    return TODO_EVENT_STREAM_URL + userId;
}

export function getApiToDosUrl() {
    return getApiEndpointUrl('/todo/data/todos');
}

export function getApiToDoByIdUrl(toDoId: string) {
    return getApiToDosUrl() + toDoId;
}

export function getApiToDosByUserIdUrl() {
    return getApiToDosUrl() + '/search/findByUserId';
}
