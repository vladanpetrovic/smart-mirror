import {Action} from '@ngrx/store';

export const TYPES = {
    LOGIN: '[API Auth] LOGIN',
    LOGOUT: '[API Auth] LOGOUT',
    SET_TOKEN: '[API Auth] SET_TOKEN'
};

export class LoginAction implements Action {
    readonly type = TYPES.LOGIN;
}

export class LogoutAction implements Action {
    readonly type = TYPES.LOGOUT;
}

export class SetTokenAction implements Action {
    readonly type = TYPES.SET_TOKEN;

    constructor(public payload: string) {
    }
}

export type Actions = LoginAction | LogoutAction | SetTokenAction;
