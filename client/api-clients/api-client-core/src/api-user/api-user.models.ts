export interface UserState {
    user: User;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    active: boolean;
}

export interface UserApiResponse {
    firstName: string;
    lastName: string;
    email: string;
    _links: {
        self: {
            href: string
        },
        toDo: {
            href: string
        }
    };
}
