export interface ReminderState {
    reminders: Reminder[];
    remindersForToday: Reminder[];
    remindersInFuture: Reminder[];
    remindersInPast: Reminder[];
}

export interface ReminderStatePayload {
    queryType: string;
    reminders: Reminder[];
}

export interface Reminder {
    id: string;
    title: string;
    dateTime: string;
    category: number;
    userId: string;
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
