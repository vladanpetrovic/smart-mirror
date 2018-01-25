import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-reminder-form-popover',
    templateUrl: 'reminder-form-popover.html',
})
export class ReminderFormPopoverPage {
    newDate: Date = new Date();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    onSubmit() {

    }

}
