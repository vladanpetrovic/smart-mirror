import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiUserService, User} from 'neatlicity-api-client-core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userState: Observable<User>;

    constructor(private apiUserService: ApiUserService) {
        this.apiUserService.getById('5a67f83460149b798047be46');
    }

    ngOnInit() {
        this.userState = this.apiUserService.userState();
    }

}
