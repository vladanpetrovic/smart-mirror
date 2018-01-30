import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IonicPage, NavController} from 'ionic-angular';
import {ApiReminderService, ApiToDoService, ApiUserService,
    ReminderState, ToDoState} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    todoState: Observable<ToDoState>;
    reminderState: Observable<ReminderState>;

    public date: Date = new Date();

    constructor(public navCtrl: NavController,
                private apiUserService: ApiUserService,
                private apiToDoService: ApiToDoService,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        this.apiUserService.userState().subscribe(
            user => {
                this.apiToDoService.initEventStreamByUserId(user.id);
                this.apiToDoService.apiGetToDosForToday(user.id);
                this.apiReminderService.initEventStreamByUserId(user.id)
                this.apiReminderService.apiGetRemindersForToday(user.id);
                this.todoState = this.apiToDoService.toDoState();
                this.reminderState = this.apiReminderService.reminderState();
            }
        );
    }
}
