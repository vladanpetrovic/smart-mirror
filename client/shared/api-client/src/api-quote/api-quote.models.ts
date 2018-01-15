export interface QuoteState {
    quote: Quote
}

export class Quote {
    constructor(public text: string,
                public author: string) {}
}

export interface QuoteApiResponse {
    text: string,
    author: string
}