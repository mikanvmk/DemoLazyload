import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRouting} from "./app.routing";
import { AppComponent } from './app.component';

import {Home} from "./dashboard/home/home";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MainModule} from "./main/main.module";
import {IssuerAccount} from "./main/issuer/screen/account/account";
import {InvestorAccount} from "./main/investor/screen/account/account";
import {IssuerComponent} from "./main/issuer/issuer.component";
import {IssuerModule} from "./main/issuer/issuer.module";
import {MainComponent} from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    //Dashboard
    DashboardComponent,
    Home,

    //Main
    MainComponent,

    //Issuer
    IssuerComponent,
    InvestorAccount,
    IssuerAccount
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    MainModule,
    IssuerModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
