import {Action} from '@ngrx/store'
import {ToDoState} from './api-todo.models';

export const TODO_ACTION_TYPES = {
    SET_TODOS_STATE: '[API ToDo] SET_TODOS_STATE',
    API_GET_TODOS: '[API ToDo] API_GET_TODOS'
};

export class SetToDosStateAction implements Action {
    readonly type = TODO_ACTION_TYPES.SET_TODOS_STATE;

    constructor(public payload: ToDoState) {}
}

export class ApiGetToDosAction implements Action {
    readonly type = TODO_ACTION_TYPES.API_GET_TODOS;
}

export type ToDoActions = SetToDosStateAction | ApiGetToDosAction;