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
    todos: ToDo[] = [];

    private ws = new WebSocket('ws://localhost:9192/todos');

    constructor(private apiToDoService: ApiToDoService) {
        this.ws.onmessage = (me: MessageEvent) => {
            const data = JSON.parse(me.data) as ToDo;
            this.todos.push(data);
        }
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.getToDos();
    }
}
