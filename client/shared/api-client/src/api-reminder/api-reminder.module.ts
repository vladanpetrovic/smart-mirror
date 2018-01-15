import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {REMINDER_STORE_NAME} from './api-reminder.consts';
import {apiReminderReducer} from './api-reminder.reducers';
import {ApiReminderEffects} from './api-reminder.effects';
import {ApiReminderService} from './api-reminder.service';

@NgModule({
    imports: [
        StoreModule.forFeature(REMINDER_STORE_NAME, apiReminderReducer),
        EffectsModule.forFeature([ApiReminderEffects])
    ],
    providers: [
        ApiReminderService
    ]
})
export class ApiReminderModule {
}