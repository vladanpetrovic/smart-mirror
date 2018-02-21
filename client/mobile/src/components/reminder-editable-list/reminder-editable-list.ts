import {Component} from '@angular/core';
import {ReminderListComponent} from '../reminder-list/reminder-list';
import {Reminder} from 'neatlicity-api-client-core';
import {showBottomToastMsg} from "../../shared/message.util";

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
        this.apiReminderService
            .delete(reminderId)
            .subscribe(
                response => {
                    showBottomToastMsg(this.toastCtrl, 'Reminder deleted.');
                }, err => {
                    if(err.error != undefined && err.error.cause != undefined) {
                        showBottomToastMsg(this.toastCtrl, err.error.cause.message);
                    }
                }
            );
    }
}
