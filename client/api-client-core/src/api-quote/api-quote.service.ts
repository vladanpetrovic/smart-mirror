import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import {Store} from '@ngrx/store';

import {QuoteState} from './api-quote.models';
import {ApiGetQuoteAction} from './api-quote.actions';
import {QUOTE_STORE_NAME} from './api-quote.consts';
import {ApiCoreState} from "../api.state";

@Injectable()
export class ApiQuoteService {

    constructor(private store: Store<ApiCoreState>) {
        this.store.dispatch(new ApiGetQuoteAction());
        Observable.interval(5 * 60 * 1000).subscribe(() => {
            this.store.dispatch(new ApiGetQuoteAction());
        });
    }

    quoteOfTheDay() {
        return this.store.select(QUOTE_STORE_NAME);
    }
}
