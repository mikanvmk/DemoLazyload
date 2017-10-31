import { NgModule } from '@angular/core';
import {AuthRouting} from "./auth.routing";
import {AuthComponent} from "./auth.component";
import {Login} from "./login/login";
import {RegisterIssuer} from "./register-issuer/register";
import {RegisterInvestor} from "./register-investor/register";
import {ForgotPassword} from "./forgot-password/forgot-password";

@NgModule({
  imports: [AuthRouting],
  declarations: [
    AuthComponent,
    RegisterIssuer,
    RegisterInvestor,
    Login,
    ForgotPassword
  ]
})
export class AuthModule {}
