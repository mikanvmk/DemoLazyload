import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "../common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.code_issuer, pathMatch: 'full' },
  { path: Constant.code_issuer, loadChildren: Constant.url_module_main_issuer },
  { path: Constant.code_investor, loadChildren: Constant.url_module_main_investor }
];

export const MainRouting: ModuleWithProviders = RouterModule.forChild(routes);
