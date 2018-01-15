export interface ToDoState {
    todos: ToDo[]
}

export class ToDo {
    constructor(public id: string,
                public title: string,
                public dateTime: string,
                public category: number,
                public done: boolean) {}
}

export interface ToDoApiResponse {
    _embedded: {
        todos: {
            title: string,
            dateTime: string,
            category: number,
            done: boolean,
            userId: string
            _links: {
                self: {
                    href: string
                },
                toDo: {
                    href: string
                }
            }
        }[]
    }
}