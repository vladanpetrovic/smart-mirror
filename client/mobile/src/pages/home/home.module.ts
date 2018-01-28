import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {ToDoListComponentModule} from '../../components/todo-list/todo-list.module';
import {ReminderListComponentModule} from '../../components/reminder-list/reminder-list.module';
import {QuoteComponentModule} from '../../components/quote/quote.module';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        ToDoListComponentModule,
        ReminderListComponentModule,
        QuoteComponentModule,
        IonicPageModule.forChild(HomePage)
    ]
})
export class HomePageModule {
}
