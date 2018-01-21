export interface AuthState {
    auth: Auth;
}

export class Auth {
    constructor(public token: string,
                public authenticated: boolean) {
    }
}

export interface AuthApiResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
