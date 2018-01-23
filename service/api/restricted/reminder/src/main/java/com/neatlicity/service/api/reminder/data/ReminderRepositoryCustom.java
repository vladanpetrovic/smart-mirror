package com.neatlicity.service.api.reminder.data;

import java.util.List;

public interface ReminderRepositoryCustom {

    List<Reminder> getByUserIdAndForToday(String userId);
    List<Reminder> getByUserIdAndForTomorrow(String userId);
    List<Reminder> getByUserIdAndInPast(String userId);
    List<Reminder> getByUserIdAndInFuture(String userId);
}
