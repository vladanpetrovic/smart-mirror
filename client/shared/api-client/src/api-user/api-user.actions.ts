import {Action} from '@ngrx/store'
import {UserState} from './api-user.models';

export const USER_ACTION_TYPES = {
    SET_USER_STATE: '[API User] SET_USER_STATE',
    API_GET_USER: '[API User] API_GET_USER'
};

export class SetUserStateAction implements Action {
    readonly type = USER_ACTION_TYPES.SET_USER_STATE;

    constructor(public payload: UserState) {}
}

export class ApiGetUserAction implements Action {
    readonly type = USER_ACTION_TYPES.API_GET_USER;
}

export type UserActions = SetUserStateAction | ApiGetUserAction;