import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiReminderService, Reminder} from 'neatlicity-api-client-core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
    reminderState: Observable<Reminder[]>;

    constructor(private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.getReminders();
    }

}
