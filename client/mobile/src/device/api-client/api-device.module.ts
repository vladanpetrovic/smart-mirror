import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {DEVICE_STORE_NAME} from "./api-device.consts";
import {apiDeviceReducer} from "./api-device.reducers";
import {ApiDeviceEffects} from "./api-device.effects";
import {ApiDeviceService} from "./api-device.service";

@NgModule({
    imports: [
        StoreModule.forFeature(DEVICE_STORE_NAME, apiDeviceReducer),
        EffectsModule.forFeature([ApiDeviceEffects])
    ],
    providers: [
        ApiDeviceService
    ]
})
export class ApiDeviceModule {
}
