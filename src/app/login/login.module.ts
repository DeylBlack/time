import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {BrowserModule} from "@angular/platform-browser";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {TimeButtonModule} from "../libs/time-button/time-button.module";

@NgModule({
  declarations: [
    LoginComponent,
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        TimeButtonModule,
    ],
  providers: [],
})
export class LoginModule {}
