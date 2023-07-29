import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeBusinessComponent } from './component/type-business.component';

const routes: Routes = [
  {
    path: '',
    component: TypeBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeBusinessRoutingModule { }
