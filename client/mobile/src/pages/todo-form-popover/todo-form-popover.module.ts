import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ToDoFormPopoverPage} from './todo-form-popover';

@NgModule({
    declarations: [
        ToDoFormPopoverPage,
    ],
    imports: [
        IonicPageModule.forChild(ToDoFormPopoverPage),
    ]
})
export class TodoNewPopoverPageModule {
}
