package com.neatlicity.service.api.todo.data;

import java.util.List;

public interface ToDoRepositoryCustom {

    List<ToDo> getByUserIdAndForToday(String userId);
    List<ToDo> getByUserIdAndInPast(String userId);
    List<ToDo> getByUserIdAndInFuture(String userId);
}
