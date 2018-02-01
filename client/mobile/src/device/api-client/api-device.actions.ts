import {Action} from '@ngrx/store';
import {Device, DeviceRequest} from "./api-device.models";

export const DEVICE_ACTION_TYPES = {
    SET_DEVICES_STATE: '[API Device] SET_DEVICES_STATE',
    API_GET_DEVICES: '[API Device] API_GET_DEVICES',
    API_CONNECT_DEVICE: '[API Device] CONNECT_DEVICE',
    API_DISCONNECT_DEVICE: '[API Device] DISCONNECT_DEVICE'
};

export class SetDevicesStateAction implements Action {
    readonly type = DEVICE_ACTION_TYPES.SET_DEVICES_STATE;

    constructor(public payload: Device[]) {
    }
}

export class ApiGetDevicesAction implements Action {
    readonly type = DEVICE_ACTION_TYPES.API_GET_DEVICES;

    constructor(public payload: string) {
    }
}

export class ApiConnectDeviceAction implements Action {
    readonly type = DEVICE_ACTION_TYPES.API_CONNECT_DEVICE;

    constructor(public payload: DeviceRequest) {
    }
}

export class ApiDisconnectDeviceAction implements Action {
    readonly type = DEVICE_ACTION_TYPES.API_DISCONNECT_DEVICE;

    constructor(public payload: string) {
    }
}

export type DeviceActions = SetDevicesStateAction | ApiGetDevicesAction |
    ApiConnectDeviceAction | ApiDisconnectDeviceAction;
