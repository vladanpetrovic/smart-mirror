import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {USER_STORE_NAME} from './api-user.consts';
import {apiUserReducer} from './api-user.reducers';
import {ApiUserEffects} from './api-user.effects';
import {ApiUserService} from './api-user.service';

@NgModule({
    imports: [
        StoreModule.forFeature(USER_STORE_NAME, apiUserReducer),
        EffectsModule.forFeature([ApiUserEffects])
    ],
    providers: [
        ApiUserService
    ]
})
export class ApiUserModule {
}
