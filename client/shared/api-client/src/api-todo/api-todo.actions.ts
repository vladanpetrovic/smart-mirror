import {Action} from '@ngrx/store'

export const TYPES = {
    GET_TODOS: '[API ToDo] GET_TODOS'
};

export class GetToDosAction implements Action {
    readonly type = TYPES.GET_TODOS;
}

export type Actions = GetToDosAction;