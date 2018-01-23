import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ApiUserService, User} from 'neatlicity-api-client-core';

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private loadingCtrl: LoadingController,
                private apiUserService: ApiUserService) {
    }

    onSubmit(form: NgForm) {
        const loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        const firstName = form.value.firstName;
        const lastName = form.value.lastName;
        const email = form.value.email;
        const password = form.value.password;

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: email,
            password: password,
            active: true
        } as User;

        const httpResponse = this.apiUserService.create(user);
        console.log(httpResponse);
        loading.dismiss();
    }

}
