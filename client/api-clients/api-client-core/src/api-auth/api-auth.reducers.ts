import * as fromAuthActions from './api-auth.actions';
import * as fromAuthState from './api-auth.state';
import {Auth, AuthState} from './api-auth.models';

export function apiAuthReducer(state = fromAuthState.authStateInitial,
                               action: fromAuthActions.AuthActions) {
    switch (action.type) {
        case fromAuthActions.AUTH_ACTION_TYPES.SET_TOKEN :
            return {
                ...state,
                token: (action as fromAuthActions.SetTokenAction).payload,
                authenticated: true
            };
        case fromAuthActions.AUTH_ACTION_TYPES.LOGOUT :
            return {
                ...state,
                token: null,
                authenticated: false
            };
        default :
            return state;
    }
}
