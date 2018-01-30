import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ApiQuoteService, QuoteState} from 'neatlicity-api-client-core';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
    quoteState: Observable<QuoteState>;

    constructor(private apiQuoteService: ApiQuoteService) {
    }

    ngOnInit() {
        this.quoteState = this.apiQuoteService.quoteOfTheDay();
    }
}
