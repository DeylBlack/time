import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {CommonModule} from '@angular/common';
import {TimeButtonModule} from '../libs/time-button/time-button.module';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

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
