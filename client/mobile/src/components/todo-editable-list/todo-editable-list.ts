import {Component} from '@angular/core';
import {ToDo} from 'neatlicity-api-client-core';
import {ToDoListComponent} from '../todo-list/todo-list';
import {showBottomToastMsg} from "../../shared/message.util";

@Component({
    selector: 'todo-editable-list',
    templateUrl: 'todo-editable-list.html'
})
export class ToDoEditableListComponent extends ToDoListComponent {

    onEdit(event: MouseEvent, toDo: ToDo) {
        const popover = this.popoverCtrl.create('ToDoFormPopoverPage', toDo);
        popover.present({ev: event});
    }

    onDelete(event: MouseEvent, toDoId: string) {
        this.apiToDoService
            .delete(toDoId)
            .subscribe(
                response => {
                    showBottomToastMsg(this.toastCtrl, 'ToDo deleted.');
                }, err => {
                    if(err.error != undefined && err.error.cause != undefined) {
                        showBottomToastMsg(this.toastCtrl, err.error.cause.message);
                    }
                }
            );
    }
}
