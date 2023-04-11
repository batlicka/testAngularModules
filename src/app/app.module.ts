import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDetailModule } from "./custom-detail/custom-detail.module";
import { CustomDetail2Module } from './custom-detail/custom-detail2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomDetailModule,
    CustomDetail2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
