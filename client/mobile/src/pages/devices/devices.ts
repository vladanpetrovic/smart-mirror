import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-devices',
    templateUrl: 'devices.html',
})
export class DevicesPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public popoverCtrl: PopoverController) {
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCtrl.create('DeviceFormPopoverPage');
        newPopover.present({ev: event});
    }
}
