import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromUserActions from './api-user.actions';
import {getApiUserByIdUrl, getApiUsersUrl, USER_STORE_NAME} from './api-user.consts';
import {User, UserState} from './api-user.models';
import {ApiCoreState} from "../api.state";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()
export class ApiUserService {

    constructor(private store: Store<ApiCoreState>,
                private httpClient: HttpClient) {
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
        return this.httpClient.post<any>(
            getApiUsersUrl(), user, {
                observe: 'response',
                responseType: 'json'
            });
    }

    update(user: User) {
        return this.httpClient.patch<any>(
            getApiUserByIdUrl(user.id),
            user, {
                observe: 'response',
                responseType: 'json'
            });
    }

    delete(userId: string) {
        return this.httpClient.delete<any>(
            getApiUserByIdUrl(userId), {
                observe: 'response',
                responseType: 'json'
            });
    }
}
