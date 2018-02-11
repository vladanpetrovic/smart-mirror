import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiReminderService, ApiUserService, ReminderState} from 'neatlicity-api-client-core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
    reminderState: Observable<ReminderState>;

    constructor(private apiUserService: ApiUserService,
                private apiReminderService: ApiReminderService) {
        this.apiUserService.userState().subscribe(
            userState => {
                if(userState != null) {
                    this.apiReminderService.initEventStreamByUserId(userState.id)
                    this.apiReminderService.apiGetRemindersForToday(userState.id);
                }
            },
            error => console.log(error),
            () => console.log('finished')
        );
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

}
