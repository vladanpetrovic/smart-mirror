import {ToDoState} from './api-todo.models';

export let todoStateInitial: ToDoState = {
    listByUserId: [],
    listForToday: [],
    listInFuture: [],
    listInPast: []
};
