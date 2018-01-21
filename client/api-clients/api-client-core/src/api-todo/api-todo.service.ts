import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {ToDo, ToDoEventApiMessage, ToDoState} from './api-todo.models';
import {ApiGetToDosAction, OnToDoEventChangeAction} from './api-todo.actions';
import {TODO_STORE_NAME} from './api-todo.consts';

@Injectable()
export class ApiToDoService {
    private eventSource = new EventSource('http://localhost:9192/event/stream');

    constructor(private store: Store<ToDoState>) {
        this.store.dispatch(new ApiGetToDosAction());

        this.eventSource.onmessage = (me: MessageEvent) => {
            const toDoEvent = JSON.parse(me.data) as ToDoEventApiMessage;
            this.store.dispatch(new OnToDoEventChangeAction(toDoEvent));
        };
    }

    getToDos() {
        return this.store.select(TODO_STORE_NAME);
    }
}
