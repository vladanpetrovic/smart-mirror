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
            userState => {
                this.apiToDoService.initEventStreamByUserId(userState.user.id);
                this.apiToDoService.getByUserId(userState.user.id);
                this.apiToDoService.apiGetToDosForToday(userState.user.id);
                this.apiToDoService.apiGetToDosInFuture(userState.user.id);
                this.apiToDoService.apiGetToDosInPast(userState.user.id);
            }
        );
    }

}
