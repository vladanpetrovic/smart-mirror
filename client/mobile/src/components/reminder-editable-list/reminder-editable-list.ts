import {Component} from '@angular/core';
import {ReminderListComponent} from '../reminder-list/reminder-list';
import {ReminderFormPopoverPage} from '../../pages/reminder-form-popover/reminder-form-popover';
import {Reminder} from 'neatlicity-api-client-core';

@Component({
    selector: 'reminder-editable-list',
    templateUrl: 'reminder-editable-list.html'
})
export class ReminderEditableListComponent extends ReminderListComponent {

    onEdit(event: MouseEvent, reminder: Reminder) {
        const popover = this.popoverCtrl.create('ReminderFormPopoverPage', reminder);
        popover.present({ev: event});
    }

    onDelete(event: MouseEvent, reminderId: string) {
        this.apiReminderService.delete(reminderId);
    }

}
