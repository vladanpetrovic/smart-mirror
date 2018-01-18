import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {ApiQuoteModule} from './api-quote';
import {ApiReminderModule} from './api-reminder';
import {ApiToDoModule} from './api-todo';
import {ApiUserModule} from './api-user';
import {ApiWeatherModule} from './api-weather';

@NgModule({
    imports: [
        ApiQuoteModule,
        ApiReminderModule,
        ApiToDoModule,
        ApiUserModule,
        ApiWeatherModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ApiModule {
}
