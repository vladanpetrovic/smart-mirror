import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  userEmail: string = "test@test.com";
  userPassword: string = "test1234";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(form: NgForm) {
    this.navCtrl.setRoot(HomePage);
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
