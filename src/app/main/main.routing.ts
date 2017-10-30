import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'issuer', loadChildren: 'issuer/issuer.module#IssuerModule' },
  { path: 'investor', loadChildren: 'investor/investor.module#InvestorModule' }
];

export const MainRouting: ModuleWithProviders = RouterModule.forRoot(routes);
