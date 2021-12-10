import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { TimeButtonModule } from '../libs/time-button/time-button.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
      CommonModule,
      LoginRoutingModule,
      TimeButtonModule,
  ],
})
export class LoginModule {}
