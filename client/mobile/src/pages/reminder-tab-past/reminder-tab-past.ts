import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiReminderService, ReminderState} from 'neatlicity-api-client-core';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
    selector: 'page-reminder-tab-past',
    templateUrl: 'reminder-tab-past.html',
})
export class ReminderTabPastPage implements OnInit {
    reminderState: Observable<ReminderState>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

}
