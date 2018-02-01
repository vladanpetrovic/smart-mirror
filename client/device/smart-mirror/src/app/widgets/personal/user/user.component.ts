import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiAuthService, ApiUserService, UserState} from 'neatlicity-api-client-core';
import {ApiDeviceService} from "../../../device/api-client/api-device.service";
import {DEVICE_ID} from "../../../app.consts";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    deviceId: string = DEVICE_ID;
    userState: Observable<UserState>;
    authenticated: boolean = false;

    constructor(private apiDeviceService: ApiDeviceService,
                private apiAuthService: ApiAuthService,
                private apiUserService: ApiUserService) {
        apiDeviceService.initEventStreamByDeviceId(DEVICE_ID);
        apiDeviceService.deviceState().subscribe(
            deviceState => {
                if(deviceState.user != null &&
                    deviceState.user.accessToken != null) {
                    this.authenticated = true;
                    apiAuthService.setToken(deviceState.user.accessToken);
                    apiUserService.getById(deviceState.user.userId);
                } else {
                    this.authenticated = false;
                }
            },
            error => console.log(error),
            () => console.log('finished')
        );

    }

    ngOnInit() {
        this.userState = this.apiUserService.userState();
    }

}
