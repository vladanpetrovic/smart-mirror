package com.neatlicity.service.api.todo.web;

import com.neatlicity.service.api.todo.data.ToDo;
import com.neatlicity.service.api.todo.data.ToDoRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.QueryParam;
import java.util.List;

@RestController
@RequestMapping("/filter")
@RequiredArgsConstructor
public class ToDoController {

    private final @NonNull ToDoRepository toDoRepository;

    @GetMapping("/getByUserIdAndForToday")
    public List<ToDo> getByUserIdAndForToday(@QueryParam("userId") String userId) {
        return toDoRepository.getByUserIdAndForToday(userId);
    }

    @GetMapping("/getByUserIdAndForTomorrow")
    public List<ToDo> getByUserIdAndForTomorrow(@QueryParam("userId") String userId) {
        return toDoRepository.getByUserIdAndForTomorrow(userId);
    }

    @GetMapping("/getByUserIdAndInPast")
    public List<ToDo> getByUserIdAndInPast(@QueryParam("userId") String userId) {
        return toDoRepository.getByUserIdAndInPast(userId);
    }

    @GetMapping("/getByUserIdAndInFuture")
    public List<ToDo> getByUserIdAndInFuture(@QueryParam("userId") String userId) {
        return toDoRepository.getByUserIdAndInFuture(userId);
    }
}
