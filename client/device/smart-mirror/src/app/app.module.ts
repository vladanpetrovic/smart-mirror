import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApiWeatherModule} from 'api-client';

import 'hammerjs';

import {AppComponent} from './app.component';

import {ElectronService} from './providers/electron.service';

import {ClockComponent} from './widgets/general/clock/clock.component';
import {WeatherComponent} from './widgets/general/weather/weather.component';
import {TodoComponent} from './widgets/personal/todo/todo.component';
import {ReminderComponent} from './widgets/personal/reminder/reminder.component';
import {UserComponent} from './widgets/personal/user/user.component';
import {QuoteComponent} from './widgets/personal/quote/quote.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {ApiWeatherEffects, apiWeatherReducer} from '../../../api-weather';
// import {ApiWeatherService} from '../../../api-weather/api-weather.service';

@NgModule({
    declarations: [
        AppComponent,
        ClockComponent,
        WeatherComponent,
        TodoComponent,
        ReminderComponent,
        UserComponent,
        QuoteComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument(),
        ApiWeatherModule
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
