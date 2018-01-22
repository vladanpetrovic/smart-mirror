import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(private apiToDoService: ApiToDoService) {
        this.apiToDoService.getByUserId('5a612381056f1e4984dd2bc9');
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
    }
}
