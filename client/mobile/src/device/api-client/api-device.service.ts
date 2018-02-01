import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppApiState} from "../../app/app.api.state";

import {DEVICE_STORE_NAME} from "./api-device.consts";
import {DeviceRequest} from "./api-device.models";
import * as fromDeviceActions from './api-device.actions';

@Injectable()
export class ApiDeviceService {
    constructor(private store: Store<AppApiState>) {
    }

    deviceState() {
        return this.store.select(DEVICE_STORE_NAME);
    }

    getByUserId(userId: string) {
        this.store.dispatch(new fromDeviceActions.ApiGetDevicesAction(userId));
    }

    connect(deviceId: string, userId: string, userToken: string) {
        const deviceRequest = {
            id: deviceId,
            user: {
                userId: userId,
                accessToken: userToken
            }
        } as DeviceRequest;
        return this.store.dispatch(new fromDeviceActions.ApiConnectDeviceAction(deviceRequest));
    }

    disconnect(deviceId: string) {
        return this.store.dispatch(new fromDeviceActions.ApiDisconnectDeviceAction(deviceId));
    }
}
