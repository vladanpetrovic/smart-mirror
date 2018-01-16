import * as fromUserActions from "./api-user.actions";
import * as fromUserState from "./api-user.state";
import {UserState} from './api-user.models';

export function apiUserReducer(state = fromUserState.userStateInitial,
                               action: fromUserActions.UserActions) {
    switch (action.type) {
        case fromUserActions.USER_ACTION_TYPES.SET_USER_STATE:
            return {
                ...state,
                user: (action as fromUserActions.SetUserStateAction).payload
            };
        default:
            return state;
    }
}