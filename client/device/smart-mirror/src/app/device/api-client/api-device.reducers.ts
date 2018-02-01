import * as fromDeviceActions from './api-device.actions';
import * as fromDeviceState from './api-device.state';
import {DeviceState} from './api-device.models';

export function apiDeviceReducer(state = fromDeviceState.deviceStateInitial,
                                 action: fromDeviceActions.DeviceActions): DeviceState {
    switch (action.type) {
        case fromDeviceActions.DEVICE_ACTION_TYPES.ON_DEVICE_EVENT_CHANGE:
            const deviceEventApiMessage = (action as fromDeviceActions.OnDeviceEventChangeAction).payload
            if(deviceEventApiMessage.type === 'USER_CONNECTED' && deviceEventApiMessage.device.user != null) {
                const deviceState = {
                    user: deviceEventApiMessage.device.user,
                } as DeviceState;
                return {
                    ...state,
                    ...deviceState
                } as DeviceState;
            } else if (deviceEventApiMessage.type === 'USER_DISCONNECTED') {
                return {
                    ...state,
                    user: null
                } as DeviceState;
            } else {
                return state;
            }
        default:
            return state;
    }
}
