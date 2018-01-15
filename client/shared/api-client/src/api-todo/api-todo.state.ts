import {ToDo, ToDoState} from './api-todo.models';

export let todoStateInitial: ToDoState = {
    todos: [
        new ToDo("123",
            "Develop SmartMirror",
            "2018-01-15T00:00:00.000",
            0, false),
        new ToDo("123",
            "Develop Mobile Clients",
            "2018-01-15T00:00:00.000",
            0, false),
        new ToDo("123",
            "Develop Web Services",
            "2018-01-15T00:00:00.000",
            0, false)
    ]
};