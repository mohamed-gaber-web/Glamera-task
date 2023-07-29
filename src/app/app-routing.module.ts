import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("./pages/registration/registration.module").then((m) => m.RegistrationModule),
  },
  {
    path: 'type-of-business',
    loadChildren: () =>
      import("./pages/type-business/type-business.module").then((m) => m.TypeBusinessModule),
  },
  {
    path: 'success',
    loadChildren: () =>
      import("./pages/success/success.module").then((m) => m.SuccessModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
