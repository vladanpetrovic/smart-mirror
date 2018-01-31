export interface AuthState {
    token: string;
    authenticated: boolean;
}

export interface AuthApiResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
