import {QuoteState, Quote} from "./api-quote.models";

export let quoteStateInitial: QuoteState = {
    quote: new Quote('Pre nego što počnete da tražite sreću, proverite - možda ste već srećni. ' +
        'Sreća je mala, obična i neupadljiva i mnogi ne umeju da je vide.',
        'Duško Radović')
};