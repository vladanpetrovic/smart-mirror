import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

import * as fromToDoActions from './api-todo.actions';
import * as fromToDoState from './api-todo.state';
import {ToDoState, ToDoStatePayload} from './api-todo.models';
import {TODO_QUERIES} from './api-todo.consts';

export function apiToDoReducer(state = fromToDoState.todoStateInitial,
                               action: fromToDoActions.ToDoActions): ToDoState {
    switch (action.type) {
        case fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE:
            const todosStatePayload: ToDoStatePayload = (action as fromToDoActions.SetToDosStateAction).payload;
            switch (todosStatePayload.queryType) {
                case TODO_QUERIES.GET_TODOS_FOR_TODAY:
                    return {
                        ...state,
                        listForToday: todosStatePayload.todos
                    } as ToDoState;
                case TODO_QUERIES.GET_TODOS_IN_FUTURE:
                    return {
                        ...state,
                        listInFuture: todosStatePayload.todos
                    } as ToDoState;
                case TODO_QUERIES.GET_TODOS_IN_PAST:
                    return {
                        ...state,
                        listInPast: todosStatePayload.todos
                    } as ToDoState;
                default:
                    return {
                        ...state,
                        listByUserId: todosStatePayload.todos
                    } as ToDoState;
            }
        case fromToDoActions.TODO_ACTION_TYPES.ON_TODO_EVENT_CHANGE:
            const toDoEvent = (action as fromToDoActions.OnToDoEventChangeAction).payload;
            let stateToDos = state.listByUserId;
            const toDoDate = new Date(toDoEvent.toDo.dateTime);
            toDoEvent.toDo.dateTime = toDoDate.toDateString();
            const daysDiff = moment().diff(toDoDate, 'd');
            if (daysDiff === 0) {
                stateToDos = state.listForToday;
            } else {
                if (daysDiff < 0) {
                    stateToDos = state.listInFuture;
                } else {
                    stateToDos = state.listInPast;
                }
            }
            switch (toDoEvent.eventType) {
                case 'CREATED':
                    let exists = false;
                    for (const todo of stateToDos) {
                        if (todo.id === toDoEvent.toDo.id) {
                            exists = true;
                            break;
                        }
                    }
                    if (!exists) {
                        stateToDos.push(toDoEvent.toDo);
                    }
                    break;
                case 'UPDATED':
                    for (const todo of stateToDos) {
                        if (todo.id === toDoEvent.toDo.id) {
                            const index = stateToDos.indexOf(todo);
                            stateToDos[index] = toDoEvent.toDo;
                        }
                    }
                    break;
                case 'DELETED':
                    for (const todo of stateToDos) {
                        if (todo.id === toDoEvent.toDo.id) {
                            const index = stateToDos.indexOf(todo);
                            stateToDos.splice(index, 1);
                        }
                    }
                    break;
                default:
                    console.log(toDoEvent);
            }
            if (daysDiff === 0) {
                return {
                    ...state,
                    listForToday: stateToDos
                } as ToDoState;
            } else {
                if (daysDiff < 0) {
                    return {
                        ...state,
                        listInFuture: stateToDos
                    } as ToDoState;
                } else {
                    return {
                        ...state,
                        listInPast: stateToDos
                    } as ToDoState;
                }
            }
        default:
            return state;
    }
}
