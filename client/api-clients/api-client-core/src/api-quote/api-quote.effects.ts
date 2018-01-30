import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import {getApiEndpointUrl} from '../api.consts';
import * as fromQuoteActions from './api-quote.actions';
import {QuoteApiResponse, QuoteState} from './api-quote.models';

@Injectable()
export class ApiQuoteEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }

    @Effect()
    apiGetQuote$ = this.actions$
        .ofType(fromQuoteActions.QUOTE_ACTION_TYPES.API_GET_QUOTE)
        .switchMap((action: fromQuoteActions.ApiGetQuoteAction) => {
            return this.httpClient.get<QuoteApiResponse>(
                getApiEndpointUrl('/quote/of-the-day'), {
                    observe: 'body',
                    responseType: 'json'
                });
        })
        .map((quoteApiResponse) => {
            const quoteState = {
                text: quoteApiResponse.text,
                author: quoteApiResponse.author
            } as QuoteState;
            return {
                type: fromQuoteActions.QUOTE_ACTION_TYPES.SET_QUOTE_STATE,
                payload: quoteState
            };
        });
}
