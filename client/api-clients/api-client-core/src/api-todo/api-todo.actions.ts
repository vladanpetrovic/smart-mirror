import {Action} from '@ngrx/store';
import {ToDo, ToDoEventApiMessage, ToDoState} from './api-todo.models';

export const TODO_ACTION_TYPES = {
    SET_TODOS_STATE: '[API ToDo] SET_TODOS_STATE',
    API_GET_TODOS: '[API ToDo] API_GET_TODOS',
    API_CREATE_TODO: '[API ToDo] API_CREATE_TODO',
    API_UPDATE_TODO: '[API ToDo] API_UPDATE_TODO',
    API_DELETE_TODO: '[API ToDo] API_DELETE_TODO',
    ON_TODO_EVENT_CHANGE: '[API ToDo] ON_TODO_EVENT_CHANGE'
};

export class SetToDosStateAction implements Action {
    readonly type = TODO_ACTION_TYPES.SET_TODOS_STATE;

    constructor(public payload: ToDoState) {
    }
}

export class ApiGetToDosAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_GET_TODOS;

    constructor(public payload: String) {
    }
}

export class ApiCreateToDoAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_CREATE_TODO;

    constructor(public payload: ToDo) {
    }
}

export class ApiUpdateToDoAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_UPDATE_TODO;

    constructor(public payload: ToDo) {
    }
}

export class ApiDeleteToDoAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_DELETE_TODO;

    constructor(public payload: String) {
    }
}

export class OnToDoEventChangeAction implements Action {
    readonly type = TODO_ACTION_TYPES.ON_TODO_EVENT_CHANGE;

    constructor(public payload: ToDoEventApiMessage) {
    }
}

export type ToDoActions = SetToDosStateAction | ApiGetToDosAction
    | ApiCreateToDoAction | ApiUpdateToDoAction | ApiDeleteToDoAction
    | OnToDoEventChangeAction;
