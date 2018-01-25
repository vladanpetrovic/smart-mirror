import {Component} from '@angular/core';
import {ToDo} from 'neatlicity-api-client-core';
import {ToDoFormPopoverPage} from '../../pages/todo-form-popover/todo-form-popover';
import {ToDoListComponent} from '../todo-list/todo-list';

@Component({
    selector: 'todo-editable-list',
    templateUrl: 'todo-editable-list.html'
})
export class ToDoEditableListComponent extends ToDoListComponent {

    onEdit(event: MouseEvent, toDo: ToDo) {
        const popover = this.popoverCtrl.create(ToDoFormPopoverPage, toDo);
        popover.present({ev: event});
    }

    onDelete(event: MouseEvent, toDoId: string) {
        this.apiToDoService.delete(toDoId);
    }

}
