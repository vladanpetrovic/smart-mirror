import {Action} from '@ngrx/store';
import {DeviceEventApiMessage} from "./api-device.models";

export const DEVICE_ACTION_TYPES = {
    ON_DEVICE_EVENT_CHANGE: '[API Device] ON_DEVICE_EVENT_CHANGE'
};

export class OnDeviceEventChangeAction implements Action {
    readonly type = DEVICE_ACTION_TYPES.ON_DEVICE_EVENT_CHANGE;

    constructor(public payload: DeviceEventApiMessage) {
    }
}

export type DeviceActions = OnDeviceEventChangeAction;
