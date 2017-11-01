import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Home} from "./home/home";
import {Constant} from "../common/constant";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: Constant.path_home, pathMatch: 'full'},
  {
    path: '', component: DashboardComponent,
    children: [
      {path: Constant.path_home, component: Home}
    ]
  }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);
