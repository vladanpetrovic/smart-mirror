export interface Device {
    id: string;
    name: string;
}

export interface DeviceState {
    devices: Device[];
}

export interface DeviceUser {
    userId: string;
    accessToken: string;
}

export interface DeviceRequest {
    id: string;
    name: string;
    user: DeviceUser;
}

export interface DeviceApiResponse {
    _embedded: {
        devices: {
            name: string;
            type: string;
            user: DeviceUser;
            _links: {
                self: {
                    href: string;
                };
                toDo: {
                    href: string;
                }
            }
        }[]
    };
}
