import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';
import {Checkbox, PopoverController, ToastController} from 'ionic-angular';
import {getToDoIconName} from '../../shared/todo.util';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.html'
})
export class ToDoListComponent implements OnChanges {
    @Input() toDoListHeader: string = '';
    @Input() todos: ToDo[] = [];
    @Input() selectable: boolean = true;
    @Input() disable: boolean = false;
    @Input() showDateTime: boolean = true;
    numOfSelected: number = 0;

    constructor(public popoverCtrl: PopoverController,
                public toastCtrl: ToastController,
                public apiToDoService: ApiToDoService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['todos']) {
            this.numOfSelected = 0;
            for (const todo of this.todos) {
                if (todo.done) {
                    this.numOfSelected++;
                }
            }
        }
    }

    onCheck(event: Checkbox, toDoId: string) {
        if (event.checked) {
            this.numOfSelected++;
        } else {
            this.numOfSelected--;
        }
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
