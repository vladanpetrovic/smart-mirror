import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {WEATHER_STORE_NAME} from './api-weather.consts';
import {apiWeatherReducer} from './api-weather.reducers';
import {ApiWeatherEffects} from './api-weather.effects';
import {ApiWeatherService} from './api-weather.service';

@NgModule({
    imports: [
        StoreModule.forFeature(WEATHER_STORE_NAME, apiWeatherReducer),
        EffectsModule.forFeature([ApiWeatherEffects])
    ],
    providers: [
        ApiWeatherService
    ]
})
export class ApiWeatherModule {
}
