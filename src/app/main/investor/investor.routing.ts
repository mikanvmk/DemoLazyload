import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvestorAccount} from "./screen/account/account";
import {Constant} from "../../common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_account, pathMatch: 'full' },
  { path: Constant.path_account, component: InvestorAccount }
];

export const InvestorRouting: ModuleWithProviders = RouterModule.forChild(routes);
