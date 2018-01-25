import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {ApiAuthService, ApiUserService, User} from 'neatlicity-api-client-core';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
    userState: Observable<User>;

    userEmail: string = 'vladan@test.com';
    userPassword: string = 'pass123';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private apiUserService: ApiUserService,
                private apiAuthService: ApiAuthService) {
    }

    ngOnInit() {
        this.userState = this.apiUserService.userState();
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.apiAuthService.login(email, password);
        this.navCtrl.setRoot('HomePage');
    }

    onSignup() {
        this.navCtrl.push('SignupPage');
    }
}
