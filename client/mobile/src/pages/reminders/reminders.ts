import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiReminderService} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-reminders',
    templateUrl: 'reminders.html',
})
export class RemindersPage implements OnInit {
    tabPast: any = 'ReminderTabPastPage';
    tabCurrent: any = 'ReminderTabCurrentPage';
    tabFuture: any = 'ReminderTabFuturePage';

    constructor(private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        const userId = '5a67f83460149b798047be46';
        this.apiReminderService.initEventStreamByUserId(userId);
        this.apiReminderService.getByUserId(userId);
        this.apiReminderService.apiGetRemindersForToday(userId);
        this.apiReminderService.apiGetRemindersInFuture(userId);
        this.apiReminderService.apiGetRemindersInPast(userId);
    }
}
