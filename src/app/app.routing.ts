import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "./common/constant";


const routes: Routes = [
  { path: '', redirectTo: Constant.path_home, pathMatch: 'full' },
  { path: Constant.url_dashboard, loadChildren: Constant.url_module_dashboard },
  { path: '', loadChildren: Constant.url_module_main }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

