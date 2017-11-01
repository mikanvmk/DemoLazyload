import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constant} from "../../common/constant";
import {InvestorProfile} from "./screen/account/profile";
import {InvestorComponent} from "./investor.component";
import {FirstLogin} from "./screen/first-login/first-login";


const routes: Routes = [
  {path: '', redirectTo: Constant.path_profile, pathMatch: 'full'},
  {
    path: '', component: InvestorComponent,
    children: [
      {path: Constant.path_profile, component: InvestorProfile},
      {path: Constant.path_first_login, component: FirstLogin}
    ]
  }
];

export const InvestorRouting: ModuleWithProviders = RouterModule.forChild(routes);
