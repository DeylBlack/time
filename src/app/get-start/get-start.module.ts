import {NgModule} from "@angular/core";
import {GetStartComponent} from "./get-start.component";
import {GetStartRoutingModule} from "./get-start-routing.module";
import {MatSidenavModule} from '@angular/material/sidenav';

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
