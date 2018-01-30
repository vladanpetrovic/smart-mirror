import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiReminderService, ReminderState} from 'neatlicity-api-client-core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
    reminderState: Observable<ReminderState>;

    constructor(private apiReminderService: ApiReminderService) {
        const userId = '5a67f83460149b798047be46';
        this.apiReminderService.initEventStreamByUserId(userId)
        this.apiReminderService.apiGetRemindersForToday('5a67f83460149b798047be46');
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

}
