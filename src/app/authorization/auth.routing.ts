import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constant} from "../common/constant";
import {RegisterInvestor} from "./register-investor/register";
import {RegisterIssuer} from "./register-issuer/register";
import {Login} from "./login/login";
import {ForgotPassword} from "./forgot-password/forgot-password";
import {AuthComponent} from "./auth.component";
import {FirstLogin} from "./first-login/first-login";

const routes: Routes = [
  {path: '', redirectTo: Constant.url_register_investor, pathMatch: 'full'},
  {
    path: '', component: AuthComponent,
    children : [
      {path: Constant.path_login, component: Login},
      {path: Constant.path_forgot, component: ForgotPassword},
      {path: Constant.path_register_investor, component: RegisterInvestor},
      {path: Constant.path_register_issuer, component: RegisterIssuer},
      {path: Constant.path_first_login, component: FirstLogin}
    ]
  }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(routes);
