import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DevicesPage} from './devices';
import {QRScanner} from '@ionic-native/qr-scanner';


@NgModule({
    declarations: [
        DevicesPage,
    ],
    imports: [
        IonicPageModule.forChild(DevicesPage),
    ],
    providers: [
        QRScanner
    ]
})
export class DevicesPageModule {
}
