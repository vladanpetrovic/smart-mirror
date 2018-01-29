import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';
import {MatListOptionChange} from '@angular/material';

class Checkbox {
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(private apiToDoService: ApiToDoService) {
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId)
        this.apiToDoService.apiGetToDosForToday(userId);
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
    }

    onCheck(event: MatListOptionChange, toDoId: string) {
        const toDo = {
            id: toDoId,
            done: event.selected
        } as ToDo;
        this.apiToDoService.update(toDo);
    }
}
