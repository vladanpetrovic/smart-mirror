import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getIdFromHateoasLink} from '../shared';
import {getApiUsersUrl, getApiUserByIdUrl, getApiUserByEmailUrl} from './api-user.consts';
import * as fromUserActions from './api-user.actions';
import {User, UserApiResponse} from './api-user.models';

@Injectable()
export class ApiUserEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetByIdUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_GET_USER_BY_ID)
        .map((action: fromUserActions.ApiGetUserByIdAction) => {
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
            const user = {
                id: getIdFromHateoasLink(userApiResponse._links.self.href),
                firstName: userApiResponse.firstName,
                lastName: userApiResponse.lastName,
                email: userApiResponse.email
            } as User;
            return {
                type: fromUserActions.USER_ACTION_TYPES.SET_USER_STATE,
                payload: user
            };
        });

    @Effect()
    apiGetByEmailUser$ = this.actions$
        .ofType(fromUserActions.USER_ACTION_TYPES.API_GET_USER_BY_EMAIL)
        .map((action: fromUserActions.ApiGetUserByEmailAction) => {
            return action.payload;
        })
        .switchMap((email: string) => {
            const params = new HttpParams()
                .set('email', email);
            return this.httpClient.get<UserApiResponse>(
                getApiUserByEmailUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((userApiResponse) => {
            const user = {
                id: getIdFromHateoasLink(userApiResponse._links.self.href),
                firstName: userApiResponse.firstName,
                lastName: userApiResponse.lastName,
                email: userApiResponse.email
            } as User;
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
                getApiUserByIdUrl(user.id),
                    user, {
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
