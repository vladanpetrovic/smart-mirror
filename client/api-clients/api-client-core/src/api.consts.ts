export const AUTH_CLIENT_ID='apiclient';
export const AUTH_CLIENT_SECRET='password';

export const AUTH_URL = 'http://192.168.1.100:9191/uaa/oauth/token';
export const API_GATEWAY_URL_BASE = 'http://192.168.1.100:8080/api';

export function getApiEndpointUrl(endpoint: string) {
    return API_GATEWAY_URL_BASE + endpoint;
}
