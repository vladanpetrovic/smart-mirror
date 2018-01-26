import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ToDoListComponentModule} from '../../components/todo-list/todo-list.module';
import {TodosPage} from './todos';
import {ToDoEditableListComponent} from '../../components/todo-editable-list/todo-editable-list';
import {ToDoEditableListComponentModule} from '../../components/todo-editable-list/todo-editable-list.module';

@NgModule({
    declarations: [
        TodosPage
    ],
    imports: [
        ToDoEditableListComponentModule,
        IonicPageModule.forChild(TodosPage)
    ]
})
export class TodosPageModule {
}
