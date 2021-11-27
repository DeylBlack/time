import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: 'get-start',
    loadChildren: () => import('./get-start/get-start.module')
      .then(m => m.GetStartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
