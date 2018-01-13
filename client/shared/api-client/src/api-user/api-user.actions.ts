import {Action} from '@ngrx/store'

export const TYPES = {
    GET_USER: '[API User] GET_USER'
};

export class GetUserAction implements Action {
    readonly type = TYPES.GET_USER;
}

export type Actions = GetUserAction;