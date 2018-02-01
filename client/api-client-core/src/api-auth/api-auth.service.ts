import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AuthState} from './api-auth.models';
import {LoginAction, LogoutAction, SetTokenAction} from './api-auth.actions';
import {AUTH_STORE_NAME} from './api-auth.consts';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiAuthService {

    constructor(private store: Store<ApiCoreState>) {
    }

    login(username: string, password: string) {
        this.store.dispatch(new LoginAction({username: username, password: password}));
    }

    logout() {
        this.store.dispatch(new LogoutAction());
    }

    authState() {
        return this.store.select(AUTH_STORE_NAME);
    }

    setToken(token: string) {
        this.store.dispatch(new SetTokenAction(token));
    }
}
