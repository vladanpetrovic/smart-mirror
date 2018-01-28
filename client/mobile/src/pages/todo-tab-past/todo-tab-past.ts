import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todo-tab-past',
    templateUrl: 'todo-tab-past.html',
})
export class TodoTabPastPage implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
    }
}
