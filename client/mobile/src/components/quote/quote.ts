import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiQuoteService, Quote} from 'neatlicity-api-client-core';

@Component({
  selector: 'quote',
  templateUrl: 'quote.html'
})
export class QuoteComponent implements OnInit {
    quoteState: Observable<Quote>;

    constructor(private apiQuoteService: ApiQuoteService) {
    }

    ngOnInit() {
        this.quoteState = this.apiQuoteService.quoteOfTheDay();
    }

}
