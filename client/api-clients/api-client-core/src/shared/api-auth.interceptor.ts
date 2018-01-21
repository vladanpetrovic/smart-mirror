import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';

import {Auth, AuthState} from '../api-auth';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<AuthState>) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
            .take(1)
            .switchMap((auth: Auth) => {
                if (auth.token != null) {
                    const authReq = req.clone({
                        setHeaders: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    return next.handle(authReq);
                } else {
                    return next.handle(req);
                }
            });
    }
}
