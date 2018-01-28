import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TodoTabCurrentPage} from './todo-tab-current';
import {ToDoEditableListComponentModule} from '../../components/todo-editable-list/todo-editable-list.module';

@NgModule({
    declarations: [
        TodoTabCurrentPage,
    ],
    imports: [
        ToDoEditableListComponentModule,
        IonicPageModule.forChild(TodoTabCurrentPage),
    ],
})
export class TodoTabCurrentPageModule {
}
