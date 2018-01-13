import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

@Injectable()
export class ApiTodoEffects {
    constructor(private actions$: Actions) {}

    // @Effect() $ = this.actions$
    //     .ofType()
    //     .map(() => {
    //     });
}