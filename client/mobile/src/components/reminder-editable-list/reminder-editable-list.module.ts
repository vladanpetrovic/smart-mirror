import {NgModule} from '@angular/core';
import {ReminderEditableListComponent} from './reminder-editable-list';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        ReminderEditableListComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        ReminderEditableListComponent
    ]
})
export class ReminderEditableListComponentModule {
}
