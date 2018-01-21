import {AuthState} from './api-auth.models';

export let authStateInitial: AuthState = {
    auth: {
        token: null,
        authenticated: false
    }
};
