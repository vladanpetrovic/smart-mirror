export const AUTH_CLIENT_ID='apiclient';
export const AUTH_CLIENT_SECRET='password';

export const AUTH_URL = 'http://localhost:9191/uaa/oauth/token';
export const API_GATEWAY_URL_BASE = 'http://localhost:8080/api';

export function getApiEndpointUrl(endpoint: string) {
    return API_GATEWAY_URL_BASE + endpoint;
}
