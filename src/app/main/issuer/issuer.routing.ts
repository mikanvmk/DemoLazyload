import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IssuerProfile} from "./screen/profile/profile";
import {Constant} from "../../common/constant";
import {IssuerComponent} from "./issuer.component";
import {Portfolio} from "./screen/portfolio/portfolio";
import {CreateProduct} from "./screen/create-product/create-product";
import {TransactionManagement} from "./screen/transaction-management/transaction-management";
import {MoneyTransaction} from "./screen/money-transaction/money-transaction";
import {Report} from "./screen/report/report";


const routes: Routes = [
  {path: '', redirectTo: Constant.path_profile, pathMatch: 'full'},
  {
    path: '', component: IssuerComponent,
    children: [
      { path: Constant.path_profile, component: IssuerProfile },
      { path: Constant.path_portfolio, component: Portfolio },
      { path: Constant.path_create_product, component: CreateProduct },
      { path: Constant.path_transaction_issuer, component: TransactionManagement },
      { path: Constant.path_money_transaction, component: MoneyTransaction },
      { path: Constant.path_money_transaction, component: Report }
    ]
  }
];

export const IssuerRouting: ModuleWithProviders = RouterModule.forChild(routes);
