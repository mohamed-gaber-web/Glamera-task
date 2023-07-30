import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './component/registration.component';

import { NgOtpInputModule } from  'ng-otp-input';
import { SwiperModule } from 'swiper/angular';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    NgOtpInputModule,
    SwiperModule,
    NgbCarouselModule
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
