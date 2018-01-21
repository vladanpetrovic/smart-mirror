import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {TODO_STORE_NAME} from './api-todo.consts';
import {apiToDoReducer} from './api-todo.reducers';
import {ApiToDoEffects} from './api-todo.effects';
import {ApiToDoService} from './api-todo.service';

@NgModule({
    imports: [
        StoreModule.forFeature(TODO_STORE_NAME, apiToDoReducer),
        EffectsModule.forFeature([ApiToDoEffects])
    ],
    providers: [
        ApiToDoService
    ]
})
export class ApiToDoModule {
}
