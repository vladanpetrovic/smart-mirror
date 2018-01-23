import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TodoNewPopoverPage} from './todo-new-popover';

@NgModule({
    declarations: [
        TodoNewPopoverPage,
    ],
    imports: [
        IonicPageModule.forChild(TodoNewPopoverPage),
    ],
})
export class TodoNewPopoverPageModule {
}
