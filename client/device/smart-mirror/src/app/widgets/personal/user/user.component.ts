import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiUserService, UserState} from 'neatlicity-api-client-core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userState: Observable<UserState>;

    constructor(private apiUserService: ApiUserService) {
        this.apiUserService.getById('5a67f83460149b798047be46');
    }

    ngOnInit() {
        this.userState = this.apiUserService.userState();
    }

}
