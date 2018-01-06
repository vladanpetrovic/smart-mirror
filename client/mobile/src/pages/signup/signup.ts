import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(form: NgForm) {
    this.navCtrl.pop();
  }

}
