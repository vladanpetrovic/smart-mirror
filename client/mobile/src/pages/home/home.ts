import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IonicPage, NavController} from 'ionic-angular';
import {ApiReminderService, ApiToDoService, Reminder, ToDo} from 'neatlicity-api-client-core';

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
                private apiToDoService: ApiToDoService,
                private apiReminderService: ApiReminderService) {
    }

    ngOnInit() {
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId);
        this.apiToDoService.getByUserId(userId);
        this.apiReminderService.initEventStreamByUserId(userId)
        this.apiReminderService.getByUserId(userId);
        this.todoState = this.apiToDoService.toDoState();
        this.reminderState = this.apiReminderService.reminderState();
    }
}
