import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ApiWeatherModule} from "./api-weather";

@NgModule({
    imports: [
        ApiWeatherModule
    ],
    exports: [
        ApiWeatherModule
    ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ApiModule {
}