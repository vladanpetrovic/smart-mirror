export interface UserState {
    user: User
}

export class User {
    constructor(public id: string,
                public firstName: string,
                public lastName: string,
                public email: string) {}
}

export interface UserApiResponse {
    firstName: string,
    lastName: string,
    email: string
}