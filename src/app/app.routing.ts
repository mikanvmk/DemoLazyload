import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'main', loadChildren: './main/main.module#LazyModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);

