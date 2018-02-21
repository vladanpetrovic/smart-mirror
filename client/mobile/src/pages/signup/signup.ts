import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ApiUserService, User} from 'neatlicity-api-client-core';
import {showBottomToastMsg} from "../../shared/message.util";

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
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

        this.apiUserService
            .create(user)
            .subscribe(
                response => {
                    const userResponse: User = response.body;
                    showBottomToastMsg(this.toastCtrl,
                        'User ' + userResponse.firstName + ' ' +
                        userResponse.lastName + ' created.'
                    );
                    this.navCtrl.push('SigninPage');
                }, err => {
                    if(err.error != undefined && err.error.cause != undefined) {
                        showBottomToastMsg(this.toastCtrl, err.error.cause.message);
                    }
                }
            );
        loading.dismiss();
    }
}
