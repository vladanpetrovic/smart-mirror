import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReminderTabFuturePage} from './reminder-tab-future';
import {ReminderEditableListComponentModule} from '../../components/reminder-editable-list/reminder-editable-list.module';

@NgModule({
    declarations: [
        ReminderTabFuturePage,
    ],
    imports: [
        ReminderEditableListComponentModule,
        IonicPageModule.forChild(ReminderTabFuturePage),
    ],
})
export class ReminderTabFuturePageModule {
}
