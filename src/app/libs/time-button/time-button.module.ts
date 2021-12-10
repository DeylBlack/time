import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeButtonComponent } from './time-button.component';

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
