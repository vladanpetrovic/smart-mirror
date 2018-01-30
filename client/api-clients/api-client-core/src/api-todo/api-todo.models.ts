export interface ToDoState {
    listByUserId: ToDo[];
    listForToday: ToDo[];
    listInFuture: ToDo[];
    listInPast: ToDo[];
}

export interface ToDoStatePayload {
    queryType: string;
    todos: ToDo[];
}

export interface ToDo {
    id: string;
    title: string;
    dateTime: string;
    category: number;
    done: boolean;
    userId: string;
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
    };
}

export interface ToDoEventApiMessage {
    eventType: string;
    toDo: {
        id: string,
        title: string,
        dateTime: string,
        category: number,
        done: boolean,
        userId: string
    };
}
