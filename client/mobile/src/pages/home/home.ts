import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IonicPage, NavController} from 'ionic-angular';
import {ApiReminderService, ApiToDoService, ApiUserService, Reminder, ToDo} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    todoState: Observable<ToDo[]>;
    reminderState: Observable<Reminder[]>;

    public date: Date = new Date();

    constructor(public navCtrl: NavController,
                private apiUserService: ApiUserService,
                private apiToDoService: ApiToDoService,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.apiUserService.userState().subscribe(
            userState => {
                this.apiToDoService.initEventStreamByUserId(userState.user.id);
                this.apiToDoService.apiGetToDosForToday(userState.user.id);
                this.apiReminderService.initEventStreamByUserId(userState.user.id)
                this.apiReminderService.apiGetRemindersForToday(userState.user.id);
                this.todoState = this.apiToDoService.toDoState();
                this.reminderState = this.apiReminderService.reminderState();
            }
        );
    }
}
