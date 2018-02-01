import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppApiState} from "../../app.api.state";
import {DEVICE_STORE_NAME, getDeviceEventStreamByIdUrl} from "./api-device.consts";
import {DeviceEventApiMessage} from "./api-device.models";
import {OnDeviceEventChangeAction} from "./api-device.actions";

@Injectable()
export class ApiDeviceService {
    private eventSource;

    constructor(private store: Store<AppApiState>) {
    }

    deviceState() {
        return this.store.select(DEVICE_STORE_NAME);
    }

    initEventStreamByDeviceId(deviceId: string) {
        this.eventSource = new EventSource(getDeviceEventStreamByIdUrl(deviceId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const deviceEvent = JSON.parse(me.data) as DeviceEventApiMessage;
            this.store.dispatch(new OnDeviceEventChangeAction(deviceEvent));
        };
    }
}
