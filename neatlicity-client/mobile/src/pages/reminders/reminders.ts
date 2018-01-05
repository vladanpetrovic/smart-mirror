import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController} from 'ionic-angular';
import { ReminderNewPopoverPage } from '../reminder-new-popover/reminder-new-popover';

@IonicPage()
@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html',
})
export class RemindersPage {

  constructor(
    public navCtrl: NavController,
    public popoverCrtl: PopoverController) {
  }

  onCreateNew(event: MouseEvent) {
    const newPopover = this.popoverCrtl.create(ReminderNewPopoverPage);
    newPopover.present({ev: event});
  }
}
