import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-todo-new-popover',
    templateUrl: 'todo-new-popover.html',
})
export class TodoNewPopoverPage {
    newDate: Date = new Date();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    onSubmit() {

    }

}
