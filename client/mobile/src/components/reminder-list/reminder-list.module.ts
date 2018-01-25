import {NgModule} from '@angular/core';
import {ReminderListComponent} from './reminder-list';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        ReminderListComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        ReminderListComponent
    ]
})
export class ReminderListComponentModule {
}
