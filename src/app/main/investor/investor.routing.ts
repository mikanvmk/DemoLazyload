import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constant} from "../../common/constant";
import {InvestorProfile} from "./screen/account/profile";
import {InvestorComponent} from "./investor.component";
import {Market} from "./screen/marketWatch/market";
import {TransactionManagement} from "./screen/transaction-management/transaction-management";
import {Report} from "./screen/report/report";

const routes: Routes = [
  {path: '', redirectTo: Constant.path_profile, pathMatch: 'full'},
  {
    path: '', component: InvestorComponent,
    children: [
      {path: Constant.path_profile, component: InvestorProfile},
      {path: Constant.path_market, component: Market},
      {path: Constant.path_transaction_management, component: TransactionManagement},
      {path: Constant.path_transaction_management, component: TransactionManagement},
      {path: Constant.path_report, component: Report}
    ]
  }
];

export const InvestorRouting: ModuleWithProviders = RouterModule.forChild(routes);
