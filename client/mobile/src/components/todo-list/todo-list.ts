import {Component, Input} from '@angular/core';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';
import {Checkbox, PopoverController} from 'ionic-angular';
import {getToDoIconName} from '../../shared/todo.util';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.html'
})
export class ToDoListComponent {
    @Input() toDoListHeader: string = '';
    @Input() todos: ToDo[] = [];
    @Input() selectable: boolean = true;

    constructor(public popoverCtrl: PopoverController,
                public apiToDoService: ApiToDoService) {
    }

    onCheck(event: Checkbox, toDoId: string) {
        const toDo = {
            id: toDoId,
            done: event.checked
        } as ToDo;
        this.apiToDoService.update(toDo);
    }

    getIconName(category: string) {
        return getToDoIconName(category);
    }
}
