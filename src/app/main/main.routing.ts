import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Constant} from "../common/constant";
import {MainComponent} from "./main.component";



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: MainComponent,
    children :[
      { path: Constant.code_issuer, loadChildren: Constant.url_module_main_issuer },
      { path: Constant.code_investor, loadChildren: Constant.url_module_main_investor }
    ]
  }
];

export const MainRouting: ModuleWithProviders = RouterModule.forChild(routes);
