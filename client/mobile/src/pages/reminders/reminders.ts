import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiReminderService, ApiUserService} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-reminders',
    templateUrl: 'reminders.html',
})
export class RemindersPage implements OnInit {
    tabPast: any = 'ReminderTabPastPage';
    tabCurrent: any = 'ReminderTabCurrentPage';
    tabFuture: any = 'ReminderTabFuturePage';

    constructor(private apiUserService: ApiUserService,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.apiUserService.userState().subscribe(
            user => {
                this.apiReminderService.initEventStreamByUserId(user.id);
                this.apiReminderService.getByUserId(user.id);
                this.apiReminderService.apiGetRemindersForToday(user.id);
                this.apiReminderService.apiGetRemindersInFuture(user.id);
                this.apiReminderService.apiGetRemindersInPast(user.id);
            }
        );
    }
}
