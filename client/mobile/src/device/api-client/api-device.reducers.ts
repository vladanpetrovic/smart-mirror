import * as fromDeviceActions from './api-device.actions';
import * as fromDeviceState from './api-device.state';
import {DeviceState} from './api-device.models';

export function apiDeviceReducer(state = fromDeviceState.deviceStateInitial,
                               action: fromDeviceActions.DeviceActions): DeviceState {
    switch (action.type) {
        case fromDeviceActions.DEVICE_ACTION_TYPES.SET_DEVICES_STATE:
            return {
                ...state,
                devices: (action as fromDeviceActions.SetDevicesStateAction).payload
            } as DeviceState;
        default:
            return state;
    }
}
