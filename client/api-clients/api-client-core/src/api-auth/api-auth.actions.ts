import {Action} from '@ngrx/store';

export const AUTH_ACTION_TYPES = {
    LOGIN: '[API Auth] LOGIN',
    LOGOUT: '[API Auth] LOGOUT',
    SET_TOKEN: '[API Auth] SET_TOKEN'
};

export class LoginAction implements Action {
    readonly type = AUTH_ACTION_TYPES.LOGIN;

    constructor(public payload: {username: string, password: string}) {}
}

export class LogoutAction implements Action {
    readonly type = AUTH_ACTION_TYPES.LOGOUT;
}

export class SetTokenAction implements Action {
    readonly type = AUTH_ACTION_TYPES.SET_TOKEN;

    constructor(public payload: string) {
    }
}

export type AuthActions = LoginAction | LogoutAction | SetTokenAction;
