import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {ToDo, ToDoState} from "./api-todo.models";
import {ApiGetToDosAction} from './api-todo.actions';
import {TODO_STORE_NAME} from './api-todo.consts';

@Injectable()
export class ApiToDoService {

    constructor(private store: Store<ToDoState>) {
        this.store.dispatch(new ApiGetToDosAction());
    }

    getToDos() {
        return this.store.select(TODO_STORE_NAME);
    }
}