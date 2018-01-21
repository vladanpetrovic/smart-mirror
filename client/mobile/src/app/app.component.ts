import {Component, OnInit, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Observable} from 'rxjs/Observable';

import {HomePage} from '../pages/home/home';
import {TodosPage} from '../pages/todos/todos';
import {RemindersPage} from '../pages/reminders/reminders';
import {SigninPage} from '../pages/signin/signin';
import {ApiUserService, User} from 'neatlicity-api-client-core';

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    @ViewChild(Nav) nav: Nav;

    userState: Observable<User>;

    rootPage: any = SigninPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private apiUserService: ApiUserService) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: HomePage},
            {title: 'To Do\'s', component: TodosPage},
            {title: 'Reminders', component: RemindersPage}
        ];

    }

    ngOnInit() {
        this.userState = this.apiUserService.getUser();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    onLogout() {
        this.nav.setRoot(SigninPage)
    }
}
