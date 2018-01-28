import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReminderTabCurrentPage} from './reminder-tab-current';
import {ReminderEditableListComponentModule} from '../../components/reminder-editable-list/reminder-editable-list.module';

@NgModule({
    declarations: [
        ReminderTabCurrentPage,
    ],
    imports: [
        ReminderEditableListComponentModule,
        IonicPageModule.forChild(ReminderTabCurrentPage),
    ],
})
export class ReminderTabCurrentPageModule {
}
