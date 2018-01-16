import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {TodosPage} from '../pages/todos/todos';
import {TodoNewPopoverPage} from '../pages/todo-new-popover/todo-new-popover';
import {RemindersPage} from '../pages/reminders/reminders';
import {ReminderNewPopoverPage} from '../pages/reminder-new-popover/reminder-new-popover';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {ApiModule} from 'neatlicity-api-client';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SigninPage,
        SignupPage,
        TodosPage,
        TodoNewPopoverPage,
        RemindersPage,
        ReminderNewPopoverPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(),
        ApiModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SigninPage,
        SignupPage,
        TodosPage,
        TodoNewPopoverPage,
        RemindersPage,
        ReminderNewPopoverPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
