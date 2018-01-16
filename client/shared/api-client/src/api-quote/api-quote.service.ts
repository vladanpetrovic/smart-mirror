import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store';

import {Quote, QuoteState} from './api-quote.models';
import {ApiGetQuoteAction} from './api-quote.actions';
import {QUOTE_STORE_NAME} from './api-quote.consts';

@Injectable()
export class ApiQuoteService {

    constructor(private store: Store<QuoteState>) {
        this.store.dispatch(new ApiGetQuoteAction());
    }

    quoteOfTheDay() {
        return this.store.select(QUOTE_STORE_NAME);
    }
}
