export interface ReminderState {
    reminders: Reminder[];
}

export class Reminder {
    constructor(public id: string,
                public title: string,
                public dateTime: string,
                public category: number) {
    }
}

export interface ReminderApiResponse {
    _embedded: {
        reminders: {
            title: string,
            dateTime: string,
            category: number,
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

export interface ReminderEventApiMessage {
    eventType: string;
    reminder: {
        id: string,
        title: string,
        dateTime: string,
        category: number,
        userId: string
    };
}
