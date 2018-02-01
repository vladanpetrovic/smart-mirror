export const DEVICE_STORE_NAME = 'device';

export const DEVICE_EVENT_STREAM_URL = 'http://192.168.1.100:9196/event/stream/byDeviceId/';

export function getDeviceEventStreamByIdUrl(deviceId: string) {
    return DEVICE_EVENT_STREAM_URL + deviceId;
}
