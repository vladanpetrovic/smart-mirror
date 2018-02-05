import {Component, OnInit, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Observable} from 'rxjs/Observable';

import {ApiUserService, UserState} from 'neatlicity-api-client-core';

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    @ViewChild(Nav) nav: Nav;

    userState: Observable<UserState>;

    rootPage: any = 'SigninPage';

    pages: Array<{ title: string, icon: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private apiUserService: ApiUserService) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', icon: 'home', component: 'HomePage'},
            {title: 'To Dos', icon: 'checkbox', component: 'TodosPage'},
            {title: 'Reminders', icon: 'calendar', component: 'RemindersPage'},
            {title: 'Devices', icon: 'git-network', component: 'DevicesPage'}
        ];

    }

    ngOnInit() {
        this.userState = this.apiUserService.userState();
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
        if(page.component === 'TodosPage' || page.component === 'RemindersPage') {
            this.nav.setRoot('HomePage');
        }
        this.nav.setRoot(page.component);
    }

    onLogout() {
        this.nav.setRoot('SigninPage')
    }
}
