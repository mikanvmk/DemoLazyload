import {NgModule} from '@angular/core';
import {DashboardRouting} from "./dashboard.routing";
import {Home} from "./home/home";
import {DashboardComponent} from "./dashboard.component";
import {ModalModule} from "ngx-bootstrap";
import {SharedModule} from "../common/share.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    DashboardRouting,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    CommonModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    Home
  ]
})
export class DashboardModule {

}
