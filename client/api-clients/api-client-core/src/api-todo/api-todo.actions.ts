import {Action} from '@ngrx/store';
import {ToDoEventApiMessage, ToDoState} from './api-todo.models';

export const TODO_ACTION_TYPES = {
    SET_TODOS_STATE: '[API ToDo] SET_TODOS_STATE',
    API_GET_TODOS: '[API ToDo] API_GET_TODOS',
    ON_TODO_EVENT_CHANGE: '[API ToDo] ON_TODO_EVENT_CHANGE'
};

export class SetToDosStateAction implements Action {
    readonly type = TODO_ACTION_TYPES.SET_TODOS_STATE;

    constructor(public payload: ToDoState) {
    }
}

export class ApiGetToDosAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_GET_TODOS;
}

export class OnToDoEventChangeAction implements Action {
    readonly type = TODO_ACTION_TYPES.ON_TODO_EVENT_CHANGE;

    constructor(public payload: ToDoEventApiMessage) {
    }
}

export type ToDoActions = SetToDosStateAction | ApiGetToDosAction | OnToDoEventChangeAction;
