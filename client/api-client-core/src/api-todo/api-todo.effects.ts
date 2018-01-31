import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getIdFromHateoasLink} from '../shared';
import {
    getApiToDoByIdUrl,
    getApiToDosByUserIdAndForTodayUrl,
    getApiToDosByUserIdAndInFutureUrl,
    getApiToDosByUserIdAndInPastUrl,
    getApiToDosByUserIdUrl,
    getApiToDosUrl,
    TODO_QUERIES
} from './api-todo.consts';
import * as fromToDoActions from './api-todo.actions';
import {ToDo, ToDoApiResponse, ToDoStatePayload} from './api-todo.models';

@Injectable()
export class ApiToDoEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetToDos$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_GET_TODOS)
        .map((action: fromToDoActions.ApiGetToDosAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<ToDoApiResponse>(
                getApiToDosByUserIdUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((todoApiResponse) => {
            const todos = [];
            for (const todo of todoApiResponse._embedded.todos) {
                todos.push({
                    id: getIdFromHateoasLink(todo._links.self.href),
                    title: todo.title,
                    dateTime: todo.dateTime,
                    category: todo.category,
                    done: todo.done
                } as ToDo);
            }
            const todoStatePayload = {
                queryType: TODO_QUERIES.DEFAULT,
                todos: todos
            } as ToDoStatePayload;
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todoStatePayload
            };
        });

    @Effect()
    apiGetToDosForToday$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_GET_TODOS_FOR_TODAY)
        .map((action: fromToDoActions.ApiGetToDosForTodayAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<ToDo[]>(
                getApiToDosByUserIdAndForTodayUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((todos) => {
            const todosStatePayload = {
                queryType: TODO_QUERIES.GET_TODOS_FOR_TODAY,
                todos: todos
            } as ToDoStatePayload;
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todosStatePayload
            };
        });

    @Effect()
    apiGetToDosInFuture$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_GET_TODOS_IN_FUTURE)
        .map((action: fromToDoActions.ApiGetToDosInFutureAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<ToDo[]>(
                getApiToDosByUserIdAndInFutureUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((todos) => {
            const todosStatePayload = {
                queryType: TODO_QUERIES.GET_TODOS_IN_FUTURE,
                todos: todos
            } as ToDoStatePayload;
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todosStatePayload
            };
        });

    @Effect()
    apiGetToDosInPast$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_GET_TODOS_IN_PAST)
        .map((action: fromToDoActions.ApiGetToDosInPastAction) => {
            return action.payload;
        })
        .switchMap((userId: string) => {
            const params = new HttpParams()
                .set('userId', userId);
            return this.httpClient.get<ToDo[]>(
                getApiToDosByUserIdAndInPastUrl(), {
                    params: params,
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((todos) => {
            const todosStatePayload = {
                queryType: TODO_QUERIES.GET_TODOS_IN_PAST,
                todos: todos
            } as ToDoStatePayload;
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todosStatePayload
            };
        });

    @Effect({dispatch: false})
    apiCreateToDo$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_CREATE_TODO)
        .map((action: fromToDoActions.ApiCreateToDoAction) => {
            return action.payload;
        })
        .switchMap((toDo: ToDo) => {
            return this.httpClient.post<any>(
                getApiToDosUrl(), toDo, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiUpdateToDo$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_UPDATE_TODO)
        .map((action: fromToDoActions.ApiUpdateToDoAction) => {
            return action.payload;
        })
        .switchMap((toDo: ToDo) => {
            return this.httpClient.patch<any>(
                getApiToDoByIdUrl(toDo.id), toDo, {
                    observe: 'body',
                    responseType: 'json'
                });
        });

    @Effect({dispatch: false})
    apiDeleteToDo$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_DELETE_TODO)
        .map((action: fromToDoActions.ApiDeleteToDoAction) => {
            return action.payload;
        })
        .switchMap((toDoId: string) => {
            return this.httpClient.delete<any>(
                getApiToDoByIdUrl(toDoId), {
                    observe: 'body',
                    responseType: 'json'
                });
        });
}
