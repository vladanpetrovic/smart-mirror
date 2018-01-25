import {NgModule} from '@angular/core';
import {ToDoListComponent} from './todo-list';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        ToDoListComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        ToDoListComponent
    ]
})
export class ToDoListComponentModule {
}
