import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {ToDoFormPopoverPage} from '../todo-form-popover/todo-form-popover';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todos',
    templateUrl: 'todos.html',
})
export class TodosPage implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(private navCtrl: NavController,
                private popoverCtrl: PopoverController,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId);
        this.apiToDoService.getByUserId(userId);
        this.todoState = this.apiToDoService.toDoState();
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCtrl.create('ToDoFormPopoverPage');
        newPopover.present({ev: event});
    }
}
