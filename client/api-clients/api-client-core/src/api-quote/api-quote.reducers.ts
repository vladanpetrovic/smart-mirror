import * as fromQuoteActions from './api-quote.actions';
import * as fromQuoteState from './api-quote.state';
import {QuoteState} from './api-quote.models';

export function apiQuoteReducer(state = fromQuoteState.quoteStateInitial,
                                action: fromQuoteActions.QuoteActions): QuoteState {
    switch (action.type) {
        case fromQuoteActions.QUOTE_ACTION_TYPES.SET_QUOTE_STATE:
            return {
                ...state,
                ...(action as fromQuoteActions.SetQuoteStateAction).payload
            } as QuoteState;
        default:
            return state;
    }
}
