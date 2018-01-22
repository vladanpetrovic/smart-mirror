import {getApiEndpointUrl} from '../api.consts';

export const USER_STORE_NAME = 'user';

export function getApiUsersUrl() {
    return getApiEndpointUrl('/user/data/users/');
}

export function getApiUserByIdUrl(userId: string) {
    return getApiUsersUrl() + userId;
}
