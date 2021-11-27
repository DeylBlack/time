import {NgModule} from "@angular/core";
import {TimeButtonComponent} from "./time-button.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TimeButtonComponent,
  ],
  exports: [
    TimeButtonComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TimeButtonModule {}
