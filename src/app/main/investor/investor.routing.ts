import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Constant} from "../../common/constant";
import {InvestorProfile} from "./screen/account/profile";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_profile, pathMatch: 'full' },
  { path: Constant.path_profile, component: InvestorProfile }
];

export const InvestorRouting: ModuleWithProviders = RouterModule.forChild(routes);
