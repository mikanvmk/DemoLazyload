import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvestorAccount} from "./screen/account/account";


const routes: Routes = [
  { path: '', redirectTo: 'investor', pathMatch: 'full' },
  { path: 'account', component: InvestorAccount }
];

export const InvestorRouting: ModuleWithProviders = RouterModule.forRoot(routes);
