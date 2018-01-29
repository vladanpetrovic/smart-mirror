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
            userState => {
                this.apiReminderService.initEventStreamByUserId(userState.id);
                this.apiReminderService.getByUserId(userState.id);
                this.apiReminderService.apiGetRemindersForToday(userState.id);
                this.apiReminderService.apiGetRemindersInFuture(userState.id);
                this.apiReminderService.apiGetRemindersInPast(userState.id);
            }
        );
    }
}
