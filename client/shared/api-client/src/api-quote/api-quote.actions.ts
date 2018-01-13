import {Action} from '@ngrx/store'
// import {Quote} from "./api-quote.model";

export const TYPES = {
    GET_QUOTE: '[API Quote] GET_QUOTE'
};

export class GetQuoteAction implements Action {
    readonly type = TYPES.GET_QUOTE;

    // constructor(public payload: Quote) {}
}

export type Actions = GetQuoteAction;