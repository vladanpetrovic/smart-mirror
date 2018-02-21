export const DEVICE_STORE_NAME = 'device';

export const DEVICE_EVENT_STREAM_URL = 'http://device-rx.api.neatlicity.com/event/stream/byDeviceId/';

export function getDeviceEventStreamByIdUrl(deviceId: string) {
    return DEVICE_EVENT_STREAM_URL + deviceId;
}
