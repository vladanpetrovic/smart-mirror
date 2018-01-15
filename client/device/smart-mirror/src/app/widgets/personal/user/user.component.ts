import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiUserService, User} from 'api-client';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userState: Observable<User>;

    constructor(private apiUserService: ApiUserService) {
    }

    ngOnInit() {
        this.userState = this.apiUserService.getUser();
    }

}
