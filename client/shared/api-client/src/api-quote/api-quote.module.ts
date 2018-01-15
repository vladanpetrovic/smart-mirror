import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {QUOTE_STORE_NAME} from './api-quote.consts';
import {apiQuoteReducer} from './api-quote.reducers';
import {ApiQuoteEffects} from './api-quote.effects';
import {ApiQuoteService} from './api-quote.service';

@NgModule({
    imports: [
        StoreModule.forFeature(QUOTE_STORE_NAME, apiQuoteReducer),
        EffectsModule.forFeature([ApiQuoteEffects])
    ],
    providers: [
        ApiQuoteService
    ]
})
export class ApiQuoteModule {
}