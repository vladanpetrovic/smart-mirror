import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {DEVICE_STORE_NAME} from "./api-device.consts";
import {apiDeviceReducer} from "./api-device.reducers";
import {ApiDeviceService} from "./api-device.service";

@NgModule({
    imports: [
        StoreModule.forFeature(DEVICE_STORE_NAME, apiDeviceReducer),
    ],
    providers: [
        ApiDeviceService
    ]
})
export class ApiDeviceModule {
}
