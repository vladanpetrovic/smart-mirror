import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiToDoService, ToDo} from 'neatlicity-api-client';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.getToDos();
    }
}
