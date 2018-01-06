import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reminder-new-popover',
  templateUrl: 'reminder-new-popover.html',
})
export class ReminderNewPopoverPage {
  newDate: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit() {

  }

}
