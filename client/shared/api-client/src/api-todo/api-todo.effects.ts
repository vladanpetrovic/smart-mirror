import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getApiEndpointUrl} from '../api.consts';
import * as fromToDoActions from "./api-todo.actions";
import {ToDo, ToDoApiResponse} from './api-todo.models';

@Injectable()
export class ApiToDoEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetToDos$ = this.actions$
        .ofType(fromToDoActions.TODO_ACTION_TYPES.API_GET_TODOS)
        .switchMap((action: fromToDoActions.ApiGetToDosAction) => {
            return this.httpClient.get<ToDoApiResponse>(
                getApiEndpointUrl('/todo/data/todos'), {
                    observe: 'body',
                    responseType: 'json'
                })
        })
        .map((todoApiResponse) => {
            let todos = [];
            for (let todo of todoApiResponse._embedded.todos) {
                todos.push(new ToDo(
                   "123",
                   todo.title,
                   todo.dateTime,
                   todo.category,
                   todo.done
                ));
            }
            return {
                type: fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE,
                payload: todos
            }
        });
}