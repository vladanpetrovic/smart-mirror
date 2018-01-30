import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html',
})
export class DevicesPage {

    constructor(private qrScanner: QRScanner,
                public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public popoverCtrl: PopoverController) {
    }

    onCreate(event: MouseEvent) {
        // const newPopover = this.popoverCtrl.create('DeviceFormPopoverPage');
        // newPopover.present({ev: event});
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    this.toastCtrl.create({
                        message: 'Camera permission was granted',
                        duration: 5000,
                        position: 'bottom'
                    }).present();

                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        this.toastCtrl.create({
                            message: 'Scanned something ' + text,
                            duration: 5000,
                            position: 'bottom'
                        }).present();

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
                    this.toastCtrl.create({
                        message: 'Camera permission was permanently denied',
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    this.toastCtrl.create({
                        message: 'Permission was denied, but not permanently',
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                }
            })
            .catch((e: any) => {
                this.toastCtrl.create({
                    message: 'Camera error occurred: ' + e,
                    duration: 5000,
                    position: 'bottom'
                }).present();
            });
    }
}
