import {getApiEndpointUrl} from '../api.consts';

export const TODO_STORE_NAME = 'todos';

export const TODO_EVENT_STREAM_URL = 'http://todo-rx.api.neatlicity.com/event/stream/byUserId/';

export function getToDoEventStreamByUserIdUrl(userId: string) {
    return TODO_EVENT_STREAM_URL + userId;
}

export function getApiToDosUrl() {
    return getApiEndpointUrl('/todo/data/todos');
}

export function getApiToDoFilterUrl() {
    return getApiEndpointUrl('/todo/filter');
}

export function getApiToDoByIdUrl(toDoId: string) {
    return getApiToDosUrl() + '/' + toDoId;
}

export function getApiToDosByUserIdUrl() {
    return getApiToDosUrl() + '/search/findByUserId';
}

export function getApiToDosByUserIdAndForTodayUrl() {
    return getApiToDoFilterUrl() + '/getByUserIdAndForToday';
}

export function getApiToDosByUserIdAndInFutureUrl() {
    return getApiToDoFilterUrl() + '/getByUserIdAndInFuture';
}

export function getApiToDosByUserIdAndInPastUrl() {
    return getApiToDoFilterUrl() + '/getByUserIdAndInPast';
}

export const TODO_QUERIES = {
    DEFAULT: 'getApiToDosByUserId',
    GET_TODOS_FOR_TODAY: 'getApiToDosByUserIdAndForToday',
    GET_TODOS_IN_FUTURE: 'getApiToDosByUserIdAndInFuture',
    GET_TODOS_IN_PAST: 'getApiToDosByUserIdAndInPast'
};
