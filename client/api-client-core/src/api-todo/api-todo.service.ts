import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromToDoActions from './api-todo.actions';
import {
    getApiToDoByIdUrl,
    getApiToDosUrl,
    getToDoEventStreamByUserIdUrl,
    TODO_STORE_NAME
} from './api-todo.consts';
import {ToDo, ToDoState, ToDoEventApiMessage} from './api-todo.models';
import {ApiCoreState} from "../api.state";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable()
export class ApiToDoService {
    private eventSource;

    constructor(private store: Store<ApiCoreState>,
                private httpClient: HttpClient) {
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
        return this.httpClient.post<any>(
            getApiToDosUrl(), toDo, {
                observe: 'response',
                responseType: 'json'
            });
    }

    update(toDo: ToDo) {
        return this.httpClient.patch<any>(
            getApiToDoByIdUrl(toDo.id), toDo, {
                observe: 'response',
                responseType: 'json'
            });
    }

    delete(toDoId: string) {
        return this.httpClient.delete<any>(
            getApiToDoByIdUrl(toDoId), {
                observe: 'response',
                responseType: 'json'
            });
    }

    initEventStreamByUserId(userId: string) {
        this.eventSource = new EventSource(getToDoEventStreamByUserIdUrl(userId));
        this.eventSource.onmessage = (me: MessageEvent) => {
            const toDoEvent = JSON.parse(me.data) as ToDoEventApiMessage;
            this.store.dispatch(new fromToDoActions.OnToDoEventChangeAction(toDoEvent));
        };
    }
}
