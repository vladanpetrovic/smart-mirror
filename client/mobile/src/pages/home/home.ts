import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NavController} from 'ionic-angular';
import {ApiReminderService, ApiToDoService, Reminder, ToDo} from 'neatlicity-api-client-core';

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
        this.apiToDoService.getByUserId('5a612381056f1e4984dd2bc9');
        this.apiReminderService.getByUserId('5a612381056f1e4984dd2bc9');
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
        this.reminderState = this.apiReminderService.reminderState();
    }
}
