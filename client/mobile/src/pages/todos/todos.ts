import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiToDoService, ApiUserService} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-todos',
    templateUrl: 'todos.html',
})
export class TodosPage implements OnInit {
    tabPast: any = 'TodoTabPastPage';
    tabCurrent: any = 'TodoTabCurrentPage';
    tabFuture: any = 'TodoTabFuturePage';

    constructor(private apiUserService: ApiUserService,
                private apiToDoService: ApiToDoService) {
    }

    ngOnInit() {
        this.apiUserService.userState().subscribe(
            user => {
                this.apiToDoService.initEventStreamByUserId(user.id);
                this.apiToDoService.getByUserId(user.id);
                this.apiToDoService.apiGetToDosForToday(user.id);
                this.apiToDoService.apiGetToDosInFuture(user.id);
                this.apiToDoService.apiGetToDosInPast(user.id);
            }
        );
    }

}
