import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {ApiAuthService, ApiUserService, User} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    userState: Observable<User>;

    userEmail: string = 'vladan@test.com';
    userPassword: string = 'pass123';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private apiUserService: ApiUserService,
                private apiAuthService: ApiAuthService) {
    }

    onSubmit(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.apiAuthService.login(email, password);
        this.apiAuthService.authState().subscribe(
            authState => {
                if(authState.authenticated) {
                    this.apiUserService.getByEmail(email);
                    this.navCtrl.setRoot('HomePage');
                }
            },
            error => console.log(error),
            () => console.log('finished')
        );
    }

    onSignup() {
        this.navCtrl.push('SignupPage');
    }
}
