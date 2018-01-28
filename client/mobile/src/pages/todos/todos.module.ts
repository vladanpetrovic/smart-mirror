import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TodosPage} from './todos';
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
