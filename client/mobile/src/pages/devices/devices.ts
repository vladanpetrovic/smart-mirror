import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
import {ApiDeviceService} from "../../device/api-client/api-device.service";
import {ApiAuthService, ApiUserService} from "neatlicity-api-client-core";
import {Observable} from "rxjs/Observable";
import {DeviceState} from "../../device/api-client/api-device.models";
import {showBottomToastMsg} from "../../shared/message.util";

@IonicPage()
@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html',
})
export class DevicesPage implements OnInit {
    deviceState: Observable<DeviceState>;
    userId: string;

    constructor(private qrScanner: QRScanner,
                public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public popoverCtrl: PopoverController,
                private apiAuthService: ApiAuthService,
                private apiUserService: ApiUserService,
                private apiDeviceService: ApiDeviceService) {
        this.apiUserService.userState().subscribe(
            userState => {
                this.userId = userState.id;
                this.apiDeviceService.getByUserId(this.userId);
            },
            error => console.log(error),
            () => console.log('finished')
        );
    }

    ngOnInit() {
        this.deviceState = this.apiDeviceService.deviceState();
    }

    onScanAndConnect(event: MouseEvent) {
        // const newPopover = this.popoverCtrl.create('DeviceFormPopoverPage');
        // newPopover.present({ev: event});
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    showBottomToastMsg(this.toastCtrl, 'Camera permission was granted');

                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((deviceId: string) => {
                        showBottomToastMsg(this.toastCtrl, 'Scanned device: ' + deviceId);

                        this.apiAuthService.authState().subscribe(
                            authState => {
                                if (authState.authenticated) {
                                    this.apiDeviceService.connect(deviceId, this.userId, authState.token);
                                    setTimeout(() => {
                                        this.apiDeviceService.getByUserId(this.userId);
                                    }, 1000);
                                }
                            },
                            error => console.log(error),
                            () => console.log('finished')
                        );


                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                        window.document.querySelector('ion-app').classList.remove('transparent-body');
                    });

                    this.qrScanner.resumePreview();

                    // show camera preview
                    this.qrScanner.show();
                    window.document.querySelector('ion-app').classList.add('transparent-body');

                    // wait for user to scan something, then the observable callback will be called

                } else if (status.denied) {
                    showBottomToastMsg(this.toastCtrl, 'Camera permission was permanently denied');
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    showBottomToastMsg(this.toastCtrl, 'Permission was denied, but not permanently');
                }
            })
            .catch((e: any) => {
                showBottomToastMsg(this.toastCtrl, 'Camera error occurred: ' + e);
            });
    }

    onDisconnect(deviceId: string) {
        this.apiDeviceService.disconnect(deviceId);
        setTimeout(() => {
            this.apiDeviceService.getByUserId(this.userId);
        }, 1000);
    }
}
