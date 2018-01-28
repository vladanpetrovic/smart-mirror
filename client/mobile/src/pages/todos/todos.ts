import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiToDoService} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todos',
    templateUrl: 'todos.html',
})
export class TodosPage implements OnInit {
    tabPast: any = 'TodoTabPastPage';
    tabCurrent: any = 'TodoTabCurrentPage';
    tabFuture: any = 'TodoTabFuturePage';

    constructor(private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        const userId = '5a67f83460149b798047be46';
        this.apiToDoService.initEventStreamByUserId(userId);
        this.apiToDoService.getByUserId(userId);
        this.apiToDoService.apiGetToDosForToday(userId);
        this.apiToDoService.apiGetToDosInFuture(userId);
        this.apiToDoService.apiGetToDosInPast(userId);
    }

}
