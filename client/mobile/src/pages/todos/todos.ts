import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Checkbox, IonicPage, NavController, PopoverController} from 'ionic-angular';
import {ToDoFormPopoverPage} from '../todo-form-popover/todo-form-popover';
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

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCrtl.create(ToDoFormPopoverPage);
        newPopover.present({ev: event});
    }

    onEdit(event: MouseEvent, toDo: ToDo) {
        const popover = this.popoverCrtl.create(ToDoFormPopoverPage, toDo);
        popover.present({ev: event});
    }

    onDelete(event: MouseEvent, toDoId: string) {
        this.apiToDoService.delete(toDoId);
    }

    onCheck(event: Checkbox, toDoId: string) {
        const toDo = {
            id: toDoId,
            done: event.checked
        } as ToDo;
        this.apiToDoService.update(toDo);
    }

    getIconName(category: String) {
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
}
