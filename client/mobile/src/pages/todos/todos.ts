import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {TodoNewPopoverPage} from '../todo-new-popover/todo-new-popover';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todos',
    templateUrl: 'todos.html',
})
export class TodosPage implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(public navCtrl: NavController,
                public popoverCrtl: PopoverController,
                private apiToDoService: ApiToDoService) {
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId);
        this.apiToDoService.getByUserId(userId);
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
    }

    onCreateNew(event: MouseEvent) {
        const newPopover = this.popoverCrtl.create(TodoNewPopoverPage);
        newPopover.present({ev: event});
    }
}
