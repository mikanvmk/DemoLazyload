import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRouting} from "./app.routing";
import { AppComponent } from './app.component';

import {Home} from "./dashboard/home/home";

@NgModule({
  declarations: [
    AppComponent,
    //Dashboard
    Home
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
