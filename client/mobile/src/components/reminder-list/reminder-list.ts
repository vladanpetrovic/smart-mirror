import {Component, Input} from '@angular/core';
import {ApiReminderService, Reminder} from 'neatlicity-api-client-core';
import {PopoverController, ToastController} from 'ionic-angular';
import {getReminderIconName} from '../../shared/reminder.util';

@Component({
    selector: 'reminder-list',
    templateUrl: 'reminder-list.html'
})
export class ReminderListComponent {
    @Input() reminderListHeader: string = '';
    @Input() reminders: Reminder[] = [];
    @Input() showDateTime: boolean = true;

    constructor(public popoverCtrl: PopoverController,
                public toastCtrl: ToastController,
                public apiReminderService: ApiReminderService) {
    }

    getIconName(category: string) {
        return getReminderIconName(category);
    }
}
