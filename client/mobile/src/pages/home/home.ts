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
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId);
        this.apiToDoService.getByUserId(userId);
        this.apiReminderService.initEventStreamByUserId(userId)
        this.apiReminderService.getByUserId(userId);
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
        this.reminderState = this.apiReminderService.reminderState();
    }

    getToDoIconName(category: String) {
        switch (category) {
            case 'HOME':
                return 'home';
            case 'WORK':
                return 'briefcase';
            case 'SHOPPING':
                return 'basket';
            case 'MAINTENANCE':
                return 'build';
            default:
                return 'home';
        }
    }

    getReminderIconName(category: String) {
        switch (category) {
            case 'MEETING':
                return 'people';
            case 'BIRTHDAY':
                return 'calendar';
            case 'HOLIDAY':
                return 'calendar';
            case 'ANNIVERSARY':
                return 'calendar';
            case 'NOTICE':
                return 'alert';
            default:
                return 'home';
        }
    }
}
