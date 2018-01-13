import * as fromQuoteActions from "./api-quote.actions";
import * as fromQuoteState from "./api-quote.state";

export function quoteReducer(state = fromQuoteState.initial, action: fromQuoteActions.Actions) {
    switch (action.type) {
        case fromQuoteActions.TYPES.GET_QUOTE:
            return {
                ...state,
                quote: null // action.payload
            }
        default:
            state;
    }
    return state;
}