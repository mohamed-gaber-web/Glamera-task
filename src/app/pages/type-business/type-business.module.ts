import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeBusinessRoutingModule } from './type-business-routing.module';
import { TypeBusinessComponent } from './component/type-business.component';


@NgModule({
  declarations: [TypeBusinessComponent],
  imports: [
    CommonModule,
    TypeBusinessRoutingModule
  ]
})
export class TypeBusinessModule { }
