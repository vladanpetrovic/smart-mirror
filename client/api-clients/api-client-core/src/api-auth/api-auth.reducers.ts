import * as fromAuthActions from './api-auth.actions';
import * as fromAuthState from './api-auth.state';
import {AuthState} from './api-auth.models';

export function apiAuthReducer(state = fromAuthState.authStateInitial,
                               action: fromAuthActions.AuthActions): AuthState {
    switch (action.type) {
        case fromAuthActions.AUTH_ACTION_TYPES.SET_TOKEN :
            return {
                ...state,
                token: (action as fromAuthActions.SetTokenAction).payload,
                authenticated: true
            } as AuthState;
        case fromAuthActions.AUTH_ACTION_TYPES.LOGOUT :
            return {
                ...state,
                token: null,
                authenticated: false
            } as AuthState;
        default :
            return state;
    }
}
