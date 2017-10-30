import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IssuerAccount} from "./screen/account/account";


const routes: Routes = [
  { path: '', redirectTo: 'issuer', pathMatch: 'full' },
  { path: 'account', component: IssuerAccount }
];

export const IssuerRouting: ModuleWithProviders = RouterModule.forRoot(routes);
