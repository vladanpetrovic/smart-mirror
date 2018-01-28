import {NgModule} from '@angular/core';
import {QuoteComponent} from './quote';
import {IonicModule} from 'ionic-angular';

@NgModule({
    declarations: [
        QuoteComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        QuoteComponent
    ]
})
export class QuoteComponentModule {
}
