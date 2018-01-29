import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceFormPopoverPage } from './device-form-popover';

@NgModule({
  declarations: [
    DeviceFormPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceFormPopoverPage),
  ],
})
export class DeviceFormPopoverPageModule {}
