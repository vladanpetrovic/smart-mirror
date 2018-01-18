import {Action} from '@ngrx/store';
import {QuoteState} from './api-quote.models';

export const QUOTE_ACTION_TYPES = {
    SET_QUOTE_STATE: '[API Quote] SET_QUOTE_STATE',
    API_GET_QUOTE: '[API Quote] API_GET_QUOTE'
};

export class SetQuoteStateAction implements Action {
    readonly type = QUOTE_ACTION_TYPES.SET_QUOTE_STATE;

    constructor(public payload: QuoteState) {
    }
}

export class ApiGetQuoteAction implements Action {
    readonly type = QUOTE_ACTION_TYPES.API_GET_QUOTE;
}

export type QuoteActions = SetQuoteStateAction | ApiGetQuoteAction;
