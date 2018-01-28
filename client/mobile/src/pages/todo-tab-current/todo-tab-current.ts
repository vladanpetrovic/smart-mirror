import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {ApiToDoService, ToDo} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todo-tab-current',
    templateUrl: 'todo-tab-current.html',
})
export class TodoTabCurrentPage implements OnInit {
    todoState: Observable<ToDo[]>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private popoverCtrl: PopoverController,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        this.todoState = this.apiToDoService.toDoState();
    }

    onCreate(event: MouseEvent) {
        const newPopover = this.popoverCtrl.create('ToDoFormPopoverPage');
        newPopover.present({ev: event});
    }
}
