import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromUserActions from './api-user.actions';
import {USER_STORE_NAME} from './api-user.consts';
import {User, UserState} from './api-user.models';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiUserService {

    constructor(private store: Store<ApiCoreState>) {
    }

    userState() {
        return this.store.select(USER_STORE_NAME);
    }

    getById(userId: string) {
        this.store.dispatch(new fromUserActions.ApiGetUserByIdAction(userId));
    }

    getByEmail(email: string) {
        this.store.dispatch(new fromUserActions.ApiGetUserByEmailAction(email));
    }

    create(user: User) {
        return this.store.dispatch(new fromUserActions.ApiCreateUserAction(user));
    }

    update(user: User) {
        return this.store.dispatch(new fromUserActions.ApiUpdateUserAction(user));
    }

    delete(userId: string) {
        return this.store.dispatch(new fromUserActions.ApiDeleteUserAction(userId));
    }
}
