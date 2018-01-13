import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import {apiWeatherReducer} from "./api-weather.reducers";
import {ApiWeatherEffects} from "./api-weather.effects";
import {ApiWeatherService} from "./api-weather.service";

@NgModule({
    imports: [
        StoreModule.forFeature('weather', apiWeatherReducer),
        EffectsModule.forFeature([ApiWeatherEffects])
    ],
    providers: [
        ApiWeatherService
    ]
})
export class ApiWeatherModule {
}