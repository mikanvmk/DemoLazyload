import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IssuerAccount} from "./screen/account/account";
import {Constant} from "../../common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_account, pathMatch: 'full' },
  { path: Constant.path_account, component: IssuerAccount }
];

export const IssuerRouting: ModuleWithProviders = RouterModule.forChild(routes);
