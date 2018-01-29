import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-device-form-popover',
  templateUrl: 'device-form-popover.html',
})
export class DeviceFormPopoverPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

}
