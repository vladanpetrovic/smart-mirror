import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReminderNewPopoverPage} from './reminder-new-popover';

@NgModule({
    declarations: [
        ReminderNewPopoverPage,
    ],
    imports: [
        IonicPageModule.forChild(ReminderNewPopoverPage),
    ],
})
export class ReminderNewPopoverPageModule {
}
