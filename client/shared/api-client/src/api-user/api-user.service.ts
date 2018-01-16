import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {User, UserState} from "./api-user.models";
import {ApiGetUserAction} from './api-user.actions';
import {USER_STORE_NAME} from './api-user.consts';

@Injectable()
export class ApiUserService {

    constructor(private store: Store<UserState>) {
        this.store.dispatch(new ApiGetUserAction());
    }

    getUser() {
        return this.store.select(USER_STORE_NAME);
    }
}