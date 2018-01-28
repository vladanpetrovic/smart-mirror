import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TodoTabFuturePage} from './todo-tab-future';
import {ToDoEditableListComponentModule} from '../../components/todo-editable-list/todo-editable-list.module';

@NgModule({
    declarations: [
        TodoTabFuturePage,
    ],
    imports: [
        ToDoEditableListComponentModule,
        IonicPageModule.forChild(TodoTabFuturePage),
    ],
})
export class TodoTabFuturePageModule {
}
