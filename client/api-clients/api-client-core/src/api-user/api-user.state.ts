import {User, UserState} from './api-user.models';

export let userStateInitial: UserState = {
    user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@test.com'
    } as User
};
