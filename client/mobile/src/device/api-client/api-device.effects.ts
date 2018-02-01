import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {
    getApiDeviceByIdUrl,
    getApiDevicesByUserIdUrl
} from './api-device.consts';
import * as fromDeviceActions from './api-device.actions';
import {Device, DeviceApiResponse, DeviceRequest} from "./api-device.models";
import {getIdFromHateoasLink} from "neatlicity-api-client-core";

@Injectable()
export class ApiDeviceEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetDevices$ = this.actions$
        .ofType(fromDeviceActions.DEVICE_ACTION_TYPES.API_GET_DEVICES)
        .map((action: fromDeviceActions.ApiGetDevicesAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<DeviceApiResponse>(
                getApiDevicesByUserIdUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((deviceApiResponse) => {
            const devices = [];
            for (const device of deviceApiResponse._embedded.devices) {
                devices.push({
                    id: getIdFromHateoasLink(device._links.self.href),
                    name: device.name
                } as Device);
            }
            return {
                type: fromDeviceActions.DEVICE_ACTION_TYPES.SET_DEVICES_STATE,
                payload: devices
            };
        });

    @Effect({dispatch: false})
    apiConnectDevice$ = this.actions$
        .ofType(fromDeviceActions.DEVICE_ACTION_TYPES.API_CONNECT_DEVICE)
        .map((action: fromDeviceActions.ApiConnectDeviceAction) => {
            return action.payload;
        })
        .switchMap((deviceRequest: DeviceRequest) => {
            return this.httpClient.patch<any>(
                getApiDeviceByIdUrl(deviceRequest.id), deviceRequest, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiDisconnectDevice$ = this.actions$
        .ofType(fromDeviceActions.DEVICE_ACTION_TYPES.API_DISCONNECT_DEVICE)
        .map((action: fromDeviceActions.ApiDisconnectDeviceAction) => {
            return action.payload;
        })
        .switchMap((deviceId: string) => {
            const deviceRequest = {
                id: deviceId,
                user: null
            } as DeviceRequest;
            return this.httpClient.patch<any>(
                getApiDeviceByIdUrl(deviceId), deviceRequest, {
                    observe: 'body',
                    responseType: 'json'
                });
        });
}
