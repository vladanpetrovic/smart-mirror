import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {QuoteState} from './api-quote.models';
import {ApiGetQuoteAction} from './api-quote.actions';
import {QUOTE_STORE_NAME} from './api-quote.consts';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiQuoteService {

    constructor(private store: Store<ApiCoreState>) {
        this.store.dispatch(new ApiGetQuoteAction());
    }

    quoteOfTheDay() {
        return this.store.select(QUOTE_STORE_NAME);
    }
}
