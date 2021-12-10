import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { GetStartComponent } from './get-start.component';
import { GetStartRoutingModule } from './get-start-routing.module';

@NgModule({
  declarations: [
    GetStartComponent,
  ],
  imports: [
    GetStartRoutingModule,
    MatSidenavModule,
  ],
  providers: [],
})
export class GetStartModule {}
