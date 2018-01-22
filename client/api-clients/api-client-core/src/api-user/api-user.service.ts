import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromUserActions from './api-user.actions';
import {USER_STORE_NAME} from './api-user.consts';
import {User, UserState} from './api-user.models';

@Injectable()
export class ApiUserService {

    constructor(private store: Store<UserState>) {
    }

    userState() {
        return this.store.select(USER_STORE_NAME);
    }

    getById(userId: string) {
        this.store.dispatch(new fromUserActions.ApiGetUserAction(userId));
    }

    create(user: User) {
        this.store.dispatch(new fromUserActions.ApiCreateUserAction(user));
    }

    update(user: User) {
        this.store.dispatch(new fromUserActions.ApiUpdateUserAction(user));
    }

    delete(userId: string) {
        this.store.dispatch(new fromUserActions.ApiDeleteUserAction(userId));
    }
}
