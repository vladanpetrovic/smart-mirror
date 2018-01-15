import { Component, OnInit } from '@angular/core';

import {ApiQuoteService, Quote} from 'api-client';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
    quoteState: Observable<Quote>;

    constructor(private apiQuoteService: ApiQuoteService) {
    }

    ngOnInit() {
        this.quoteState = this.apiQuoteService.quoteOfTheDay();
    }

}
