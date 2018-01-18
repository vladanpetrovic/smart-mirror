export const API_GATEWAY_URL_BASE = 'http://localhost:8080/api';

export function getApiEndpointUrl(endpoint: string) {
    return API_GATEWAY_URL_BASE + endpoint;
}
