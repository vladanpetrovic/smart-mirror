import * as fromToDoActions from "./api-todo.actions";
import * as fromToDoState from "./api-todo.state";

export function apiToDoReducer(state = fromToDoState.todoStateInitial, action: fromToDoActions.ToDoActions) {
    switch (action.type) {
        case fromToDoActions.TODO_ACTION_TYPES.SET_TODOS_STATE:
            return {
                ...state,
                todos: (action as fromToDoActions.SetToDosStateAction).payload
            };
        default:
            return state;
    }
}