import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AUTH_STORE_NAME} from './api-auth.consts';
import {apiAuthReducer} from './api-auth.reducers';
import {ApiAuthEffects} from './api-auth.effects';
import {ApiAuthService} from './api-auth.service';

@NgModule({
    imports: [
        StoreModule.forFeature(AUTH_STORE_NAME, apiAuthReducer),
        EffectsModule.forFeature([ApiAuthEffects])
    ],
    providers: [
        ApiAuthService
    ]
})
export class ApiAuthModule {
}
