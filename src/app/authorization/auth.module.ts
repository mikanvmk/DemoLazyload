import { NgModule } from '@angular/core';
import {AuthRouting} from "./auth.routing";
import {AuthComponent} from "./auth.component";
import {Login} from "./login/login";
import {RegisterIssuer} from "./register-issuer/register";
import {RegisterInvestor} from "./register-investor/register";
import {ForgotPassword} from "./forgot-password/forgot-password";
import {SharedModule} from "../common/share.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RecaptchaFormsModule} from "ng-recaptcha/forms";
import {ReCaptchaModule} from "angular2-recaptcha";

@NgModule({
  imports: [
    AuthRouting,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    ReCaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    AuthComponent,
    RegisterIssuer,
    RegisterInvestor,
    Login,
    ForgotPassword
  ],
  exports:[
    CommonModule,
    FormsModule
  ]
})
export class AuthModule {}
