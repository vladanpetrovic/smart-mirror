import {Action} from '@ngrx/store';
import {User, UserState} from './api-user.models';

export const USER_ACTION_TYPES = {
    SET_USER_STATE: '[API User] SET_USER_STATE',
    API_GET_USER: '[API User] API_GET_USER',
    API_CREATE_USER: '[API User] API_CREATE_USER',
    API_UPDATE_USER: '[API User] API_UPDATE_USER',
    API_DELETE_USER: '[API User] API_DELETE_USER'
};

export class SetUserStateAction implements Action {
    readonly type = USER_ACTION_TYPES.SET_USER_STATE;

    constructor(public payload: UserState) {
    }
}

export class ApiGetUserAction implements Action {
    readonly type = USER_ACTION_TYPES.API_GET_USER;

    constructor(public payload: String) {
    }
}

export class ApiCreateUserAction implements Action {
    readonly type = USER_ACTION_TYPES.API_CREATE_USER;

    constructor(public payload: User) {
    }
}

export class ApiUpdateUserAction implements Action {
    readonly type = USER_ACTION_TYPES.API_UPDATE_USER;

    constructor(public payload: User) {
    }
}

export class ApiDeleteUserAction implements Action {
    readonly type = USER_ACTION_TYPES.API_DELETE_USER;

    constructor(public payload: String) {
    }
}

export type UserActions = SetUserStateAction | ApiGetUserAction |
    ApiCreateUserAction | ApiUpdateUserAction | ApiDeleteUserAction;
