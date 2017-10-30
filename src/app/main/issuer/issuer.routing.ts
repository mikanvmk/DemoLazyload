import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Account} from "./screen/account/account";


const routes: Routes = [
  { path: '', redirectTo: 'issuer', pathMatch: 'full' },
  { path: 'account', component: Account }
];

export const IssuerRouting: ModuleWithProviders = RouterModule.forRoot(routes);
