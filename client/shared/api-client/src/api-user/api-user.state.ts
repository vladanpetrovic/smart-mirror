import {User, UserState} from './api-user.models';

export let userStateInitial: UserState = {
    user: new User('123', 'John', 'Doe', 'john@test.com')
};
