import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {ReminderFormPopoverPage} from '../reminder-form-popover/reminder-form-popover';
import {Observable} from 'rxjs/Observable';
import {ApiReminderService, Reminder} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-reminders',
    templateUrl: 'reminders.html',
})
export class RemindersPage implements OnInit {
    reminderState: Observable<Reminder[]>;

    constructor(public navCtrl: NavController,
                public popoverCtrl: PopoverController,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        const userId = '5a67f83460149b798047be46';
        this.apiReminderService.initEventStreamByUserId(userId);
        this.apiReminderService.getByUserId(userId);
        this.reminderState = this.apiReminderService.reminderState();
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCtrl.create('ReminderFormPopoverPage');
        newPopover.present({ev: event});
    }
}
