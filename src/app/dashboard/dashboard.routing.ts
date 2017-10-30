import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Home} from "./home/home";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forRoot(routes);
