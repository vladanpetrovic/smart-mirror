import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {ReminderNewPopoverPage} from '../reminder-new-popover/reminder-new-popover';
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
                public popoverCrtl: PopoverController,
                private apiReminderService: ApiReminderService) {
        this.apiReminderService.getByUserId('5a612381056f1e4984dd2bc9');
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

    onCreateNew(event: MouseEvent) {
        const newPopover = this.popoverCrtl.create(ReminderNewPopoverPage);
        newPopover.present({ev: event});
    }
}
