import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ApiReminderService, Reminder} from 'neatlicity-api-client-core';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
    selector: 'page-reminder-tab-future',
    templateUrl: 'reminder-tab-future.html',
})
export class ReminderTabFuturePage implements OnInit {
    reminderState: Observable<Reminder[]>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public popoverCtrl: PopoverController,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.reminderState = this.apiReminderService.reminderState();
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCtrl.create('ReminderFormPopoverPage');
        newPopover.present({ev: event});
    }
}
