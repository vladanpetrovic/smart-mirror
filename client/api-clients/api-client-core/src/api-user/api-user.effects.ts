import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getIdFromHateoasLink} from '../shared';
import {getApiUsersUrl, getApiUserByIdUrl} from './api-user.consts';
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
        .map((action: fromUserActions.ApiGetUserAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            return this.httpClient.get<UserApiResponse>(
                getApiUserByIdUrl(userId), {
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((userApiResponse) => {
            const user = new User(
                getIdFromHateoasLink(userApiResponse._links.self.href),
                userApiResponse.firstName,
                userApiResponse.lastName,
                userApiResponse.email);
            return {
                type: fromUserActions.USER_ACTION_TYPES.SET_USER_STATE,
                payload: user
            };
        });

    @Effect({dispatch: false})
    apiCreateUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_CREATE_USER)
        .map((action: fromUserActions.ApiCreateUserAction) => {
            return action.payload;
        })
        .switchMap((user: User) => {
            return this.httpClient.post<any>(
                getApiUsersUrl(), user, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiUpdateUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_UPDATE_USER)
        .map((action: fromUserActions.ApiUpdateUserAction) => {
            return action.payload;
        })
        .switchMap((user: User) => {
            return this.httpClient.patch<any>(
                getApiUserByIdUrl(user.id), user, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiDeleteUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_DELETE_USER)
        .map((action: fromUserActions.ApiDeleteUserAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            return this.httpClient.delete<any>(
                getApiUserByIdUrl(userId), {
                    observe: 'body',
                    responseType: 'json'
                });
        });
}
