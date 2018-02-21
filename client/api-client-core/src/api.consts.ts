export const AUTH_CLIENT_ID='apiclient';
export const AUTH_CLIENT_SECRET='password';

export const AUTH_URL = 'http://auth.neatlicity.com/uaa/oauth/token';
export const API_GATEWAY_URL_BASE = 'http://api.neatlicity.com/api';

export function getApiEndpointUrl(endpoint: string) {
    return API_GATEWAY_URL_BASE + endpoint;
}
