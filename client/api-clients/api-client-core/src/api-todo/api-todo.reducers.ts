import * as fromToDoActions from './api-todo.actions';
import * as fromToDoState from './api-todo.state';
import {ToDoState} from './api-todo.models';

export function apiToDoReducer(state = fromToDoState.todoStateInitial,
                               action: fromToDoActions.ToDoActions) {
    switch (action.type) {
        case fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE:
            return {
                ...state,
                todos: (action as fromToDoActions.SetToDosStateAction).payload
            };
        case fromToDoActions.TODO_ACTION_TYPES.ON_TODO_EVENT_CHANGE:
            const toDoEvent = (action as fromToDoActions.OnToDoEventChangeAction).payload;
            const stateToDos = state.todos;
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
            return {
                ...state,
                todos: stateToDos
            };
        default:
            return state;
    }
}
