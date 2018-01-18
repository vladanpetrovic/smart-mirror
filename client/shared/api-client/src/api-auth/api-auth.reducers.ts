import * as fromAuthActions from './api-auth.actions';
import * as fromAuthState from './api-auth.state';

export function authReducer(state = fromAuthState.initial, action: fromAuthActions.Actions) {
    switch (action.type) {
        case fromAuthActions.TYPES.LOGIN :
            return {
                ...state,
                authenticated: true
            };
        case fromAuthActions.TYPES.LOGOUT :
            return {
                ...state,
                token: null,
                authenticated: false
            };
        default :
            return state;
    }
};
