import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {Auth, AuthState} from './api-auth.models';
import {LoginAction, LogoutAction} from './api-auth.actions';
import {AUTH_STORE_NAME} from './api-auth.consts';

@Injectable()
export class ApiAuthService {

    constructor(private store: Store<AuthState>) {
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
}
