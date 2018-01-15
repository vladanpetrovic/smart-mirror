import * as fromQuoteActions from "./api-quote.actions";
import * as fromQuoteState from "./api-quote.state";

export function apiQuoteReducer(state = fromQuoteState.quoteStateInitial, action: fromQuoteActions.QuoteActions) {
    switch (action.type) {
        case fromQuoteActions.QUOTE_ACTION_TYPES.SET_QUOTE_STATE:
            return {
                ...state,
                quote: (action as fromQuoteActions.SetQuoteStateAction).payload
            }
        default:
            state;
    }
}