import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RemindersPage} from './reminders';
import {ReminderEditableListComponentModule} from '../../components/reminder-editable-list/reminder-editable-list.module';

@NgModule({
    declarations: [
        RemindersPage,
    ],
    imports: [
        ReminderEditableListComponentModule,
        IonicPageModule.forChild(RemindersPage),
    ]
})
export class RemindersPageModule {
}
