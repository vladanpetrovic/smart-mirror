import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiReminderEffects {
    constructor(private actions$: Actions,
                private httpClient: HttpClient) {
    }


}
