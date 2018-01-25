import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReminderFormPopoverPage} from './reminder-form-popover';

@NgModule({
    declarations: [
        ReminderFormPopoverPage,
    ],
    imports: [
        IonicPageModule.forChild(ReminderFormPopoverPage),
    ]
})
export class ReminderNewPopoverPageModule {
}
