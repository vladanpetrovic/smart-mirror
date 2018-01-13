import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

@Injectable()
export class ApiReminderEffects {
    constructor(private actions$: Actions) {}

    // @Effect() $ = this.actions$
    //     .ofType()
    //     .map(() => {
    //     });
}