import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromToDoActions from './api-todo.actions';
import {getToDoEventStreamByUserIdUrl, TODO_STORE_NAME} from './api-todo.consts';
import {ToDo, ToDoState, ToDoEventApiMessage} from './api-todo.models';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiToDoService {
    private eventSource;

    constructor(private store: Store<ApiCoreState>) {
    }

    toDoState() {
        return this.store.select(TODO_STORE_NAME);
    }

    getByUserId(userId: string) {
        this.store.dispatch(new fromToDoActions.ApiGetToDosAction(userId));
    }

    apiGetToDosForToday(userId: string) {
        return this.store.dispatch(new fromToDoActions.ApiGetToDosForTodayAction(userId));
    }

    apiGetToDosInFuture(userId: string) {
        return this.store.dispatch(new fromToDoActions.ApiGetToDosInFutureAction(userId));
    }

    apiGetToDosInPast(userId: string) {
        return this.store.dispatch(new fromToDoActions.ApiGetToDosInPastAction(userId));
    }

    create(toDo: ToDo) {
        return this.store.dispatch(new fromToDoActions.ApiCreateToDoAction(toDo));
    }

    update(toDo: ToDo) {
        return this.store.dispatch(new fromToDoActions.ApiUpdateToDoAction(toDo));
    }

    delete(toDoId: string) {
        return this.store.dispatch(new fromToDoActions.ApiDeleteToDoAction(toDoId));
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getToDoEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const toDoEvent = JSON.parse(me.data) as ToDoEventApiMessage;
            this.store.dispatch(new fromToDoActions.OnToDoEventChangeAction(toDoEvent));
        };
    }
}
