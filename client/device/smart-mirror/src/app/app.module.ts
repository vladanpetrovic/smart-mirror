import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

import { AppComponent } from './app.component';

import { ElectronService } from './providers/electron.service';

import { ClockComponent } from './widgets/general/clock/clock.component';
import { WeatherComponent } from './widgets/general/weather/weather.component';
import { TodoComponent } from './widgets/personal/todo/todo.component';
import { ReminderComponent } from './widgets/personal/reminder/reminder.component';
import { WeatherService } from './widgets/general/weather/weather.service';
import { UserComponent } from './widgets/personal/user/user.component';
import { QuoteComponent } from './widgets/personal/quote/quote.component';
import { MaterialModule } from "./material.module";


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
    FormsModule,
    HttpClientModule
  ],
  providers: [ElectronService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
