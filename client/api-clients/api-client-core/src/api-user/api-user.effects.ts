import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getApiEndpointUrl} from '../api.consts';
import * as fromUserActions from './api-user.actions';
import {User, UserApiResponse} from './api-user.models';

@Injectable()
export class ApiUserEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_GET_USER)
        .switchMap((action: fromUserActions.ApiGetUserAction) => {
            return this.httpClient.get<UserApiResponse>(
                getApiEndpointUrl('/user/data/users/5a612381056f1e4984dd2bc9'), {
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((userApiResponse) => {
            const user = new User(
                '5a556d2d49e7066eb7c9e521',
                userApiResponse.firstName,
                userApiResponse.lastName,
                userApiResponse.email);
            return {
                type: fromUserActions.USER_ACTION_TYPES.SET_USER_STATE,
                payload: user
            };
        });
}
