import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {ApiAuthModule} from './api-auth';
import {ApiQuoteModule} from './api-quote';
import {ApiReminderModule} from './api-reminder';
import {ApiToDoModule} from './api-todo';
import {ApiUserModule} from './api-user';
import {ApiWeatherModule} from './api-weather';
import {ApiSharedModule} from './shared/api-shared.module';

@NgModule({
    imports: [
        ApiAuthModule,
        ApiQuoteModule,
        ApiReminderModule,
        ApiToDoModule,
        ApiUserModule,
        ApiWeatherModule,
        ApiSharedModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ApiCoreModule {
}
