import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimplisticTimerComponent } from './simplistic-timer/simplistic-timer.component';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    AppComponent,
    SimplisticTimerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
