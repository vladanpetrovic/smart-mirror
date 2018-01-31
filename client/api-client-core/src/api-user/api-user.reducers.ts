import * as fromUserActions from './api-user.actions';
import * as fromUserState from './api-user.state';
import {UserState} from './api-user.models';

export function apiUserReducer(state = fromUserState.userStateInitial,
                               action: fromUserActions.UserActions): UserState {
    switch (action.type) {
        case fromUserActions.USER_ACTION_TYPES.SET_USER_STATE:
            return {
                ...state,
                ...(action as fromUserActions.SetUserStateAction).payload
            } as UserState;
        default:
            return state;
    }
}
