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
                public popoverCrtl: PopoverController,
                private apiReminderService: ApiReminderService) {
        const userId = '5a67f83460149b798047be46';
        this.apiReminderService.initEventStreamByUserId(userId)
        this.apiReminderService.getByUserId(userId);
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCrtl.create(ReminderFormPopoverPage);
        newPopover.present({ev: event});
    }

    onEdit(event: MouseEvent, reminder: Reminder) {
        const popover = this.popoverCrtl.create(ReminderFormPopoverPage, reminder);
        popover.present({ev: event});
    }

    onDelete(event: MouseEvent, reminderId: string) {
        this.apiReminderService.delete(reminderId);
    }

    getReminderIconName(category: String) {
        switch (category) {
            case 'MEETING':
                return 'people';
            case 'BIRTHDAY':
                return 'calendar';
            case 'HOLIDAY':
                return 'calendar';
            case 'ANNIVERSARY':
                return 'calendar';
            case 'NOTICE':
                return 'alert';
            default:
                return 'home';
        }
    }
}
