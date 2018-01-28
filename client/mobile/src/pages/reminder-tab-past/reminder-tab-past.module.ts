import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReminderTabPastPage} from './reminder-tab-past';
import {ReminderEditableListComponentModule} from '../../components/reminder-editable-list/reminder-editable-list.module';

@NgModule({
    declarations: [
        ReminderTabPastPage,
    ],
    imports: [
        ReminderEditableListComponentModule,
        IonicPageModule.forChild(ReminderTabPastPage),
    ],
})
export class ReminderTabPastPageModule {
}
