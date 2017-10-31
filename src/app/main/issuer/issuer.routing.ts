import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IssuerProfile} from "./screen/profile/profile";
import {Constant} from "../../common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_profile, pathMatch: 'full' },
  { path: Constant.path_profile, component: IssuerProfile }
];

export const IssuerRouting: ModuleWithProviders = RouterModule.forChild(routes);
