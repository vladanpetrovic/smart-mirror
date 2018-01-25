import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {ToDoListComponentModule} from '../../components/todo-list/todo-list.module';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        ToDoListComponentModule,
        IonicPageModule.forChild(HomePage)
    ]
})
export class HomePageModule {
}
