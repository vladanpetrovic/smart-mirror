import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

const MAT_MODULES  = [
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule {}
