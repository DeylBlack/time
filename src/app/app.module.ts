import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoryControlsComponent } from './story-controls/story-controls.component';
import { TimeButtonModule } from './libs/time-button/time-button.module';
import { TimeInputComponent } from './libs/time-input/time-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StoryControlsComponent,
    TimeInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimeButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
