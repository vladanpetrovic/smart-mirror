import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromToDoActions from './api-todo.actions';
import {getToDoEventStreamByUserIdUrl, TODO_STORE_NAME} from './api-todo.consts';
import {ToDo, ToDoEventApiMessage, ToDoState} from './api-todo.models';

@Injectable()
export class ApiToDoService {
    private eventSource;

    constructor(private store: Store<ToDoState>) {
    }

    toDoState() {
        return this.store.select(TODO_STORE_NAME);
    }

    getByUserId(userId: string) {
        this.store.dispatch(new fromToDoActions.ApiGetToDosAction(userId));
    }

    create(toDo: ToDo) {
        this.store.dispatch(new fromToDoActions.ApiCreateToDoAction(toDo));
    }

    update(toDo: ToDo) {
        this.store.dispatch(new fromToDoActions.ApiUpdateToDoAction(toDo));
    }

    delete(toDoId: string) {
        this.store.dispatch(new fromToDoActions.ApiDeleteToDoAction(toDoId));
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getToDoEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const toDoEvent = JSON.parse(me.data) as ToDoEventApiMessage;
            this.store.dispatch(new fromToDoActions.OnToDoEventChangeAction(toDoEvent));
        };
    }
}
