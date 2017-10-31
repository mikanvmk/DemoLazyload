import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_home, pathMatch: 'full' },
  { path: Constant.path_account, loadChildren: Constant.url_module_main },
  { path: Constant.path_auth, loadChildren: Constant.url_module_auth},
  { path: Constant.path_active, loadChildren: Constant.url_module_active_mail},
  { path: '', loadChildren: Constant.url_module_dashboard }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

