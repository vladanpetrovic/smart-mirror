import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_URL} from '../api.consts';
import {AuthApiResponse} from './api-auth.models';
import * as fromAuthActions from './api-auth.actions';

@Injectable()
export class ApiAuthEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    login$ = this.actions$
        .ofType(fromAuthActions.AUTH_ACTION_TYPES.LOGIN)
        .map((action: fromAuthActions.LoginAction) => {
            return action.payload;
        })
        .switchMap((authData: { username: string, password: string }) => {
            const formData = new FormData();
            formData.set('username', authData.username);
            formData.set('password', authData.password);
            formData.set('grant_type', 'password');

            let headers = new HttpHeaders();
            // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers = headers.append('Authorization', 'Basic ' +
                btoa(AUTH_CLIENT_ID + ':' + AUTH_CLIENT_SECRET));
            headers = headers.append('Accept', 'application/json');

            return this.httpClient.post<AuthApiResponse>(AUTH_URL, formData, {
                headers: headers,
                observe: 'body',
                responseType: 'json'
            });
        })
        .map((authApiResponse) => {
            return {
                type: fromAuthActions.AUTH_ACTION_TYPES.SET_TOKEN,
                payload: authApiResponse.access_token
            };
        });
}
