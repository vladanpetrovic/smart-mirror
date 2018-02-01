export interface DeviceUser {
    userId: string;
    accessToken: string;
}

export interface DeviceState {
    user: DeviceUser;
}

export interface DeviceEventApiMessage {
    type: string;
    device: {
        id: string;
        name: string;
        type: string;
        user: DeviceUser;
    };
    deviceId: string;
}
