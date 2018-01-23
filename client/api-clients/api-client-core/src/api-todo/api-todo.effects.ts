import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getIdFromHateoasLink} from '../shared';
import {getApiToDoByIdUrl, getApiToDosByUserIdUrl, getApiToDosUrl} from './api-todo.consts';
import * as fromToDoActions from './api-todo.actions';
import {ToDo, ToDoApiResponse} from './api-todo.models';

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
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todos
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
