import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TodoTabPastPage} from './todo-tab-past';
import {ToDoEditableListComponentModule} from '../../components/todo-editable-list/todo-editable-list.module';

@NgModule({
    declarations: [
        TodoTabPastPage,
    ],
    imports: [
        ToDoEditableListComponentModule,
        IonicPageModule.forChild(TodoTabPastPage),
    ],
})
export class TodoTabPastPageModule {
}
