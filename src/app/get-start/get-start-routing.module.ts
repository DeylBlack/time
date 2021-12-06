import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GetStartComponent} from './get-start.component';

const routes: Routes = [
  {
    path: '',
    component: GetStartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartRoutingModule {}
