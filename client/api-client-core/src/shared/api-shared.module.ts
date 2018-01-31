import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {ApiAuthInterceptor} from './api-auth.interceptor';
import {ApiLogInterceptor} from './api-log.interceptor';

@NgModule({
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ApiAuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiLogInterceptor, multi: true}
    ]
})
export class ApiSharedModule {
}
