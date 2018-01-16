import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';
import {Observable} from 'rxjs/Observable';
import {ApiUserService, User} from 'neatlicity-api-client';

@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
    userState: Observable<User>;

    userEmail: string = 'test@test.com';
    userPassword: string = 'test1234';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private apiUserService: ApiUserService) {
    }

    ngOnInit() {
        this.userState = this.apiUserService.getUser();
    }
    
    onSubmit(form: NgForm) {
        this.navCtrl.setRoot(HomePage);
    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }
}
