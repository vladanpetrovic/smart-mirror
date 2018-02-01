import {getApiEndpointUrl} from 'neatlicity-api-client-core';

export const DEVICE_STORE_NAME = 'device';

export function getApiDevicesUrl() {
    return getApiEndpointUrl('/device/data/devices');
}

export function getApiDeviceByIdUrl(deviceId: string) {
    return getApiDevicesUrl() + '/' + deviceId;
}

export function getApiDevicesByUserIdUrl() {
    return getApiDevicesUrl() + '/search/findByUserId';
}
