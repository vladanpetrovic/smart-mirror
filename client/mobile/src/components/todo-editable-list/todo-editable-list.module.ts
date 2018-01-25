import {NgModule} from '@angular/core';
import {ToDoEditableListComponent} from './todo-editable-list';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        ToDoEditableListComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        ToDoEditableListComponent
    ]
})
export class ToDoEditableListComponentModule {
}
