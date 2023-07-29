import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './component/registration.component';

import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    NgOtpInputModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
