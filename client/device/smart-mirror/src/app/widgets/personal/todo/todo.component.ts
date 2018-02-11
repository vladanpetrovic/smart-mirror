import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiToDoService, ToDoState, ToDo, ApiUserService} from 'neatlicity-api-client-core';
import {MatListOptionChange} from '@angular/material';

class Checkbox {
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todoState: Observable<ToDoState>;

    constructor(private apiUserService: ApiUserService,
                private apiToDoService: ApiToDoService) {
        this.apiUserService.userState().subscribe(
            userState => {
                if(userState != null) {
                    this.apiToDoService.initEventStreamByUserId(userState.id)
                    this.apiToDoService.apiGetToDosForToday(userState.id);
                }
            },
            error => console.log(error),
            () => console.log('finished')
        );
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
