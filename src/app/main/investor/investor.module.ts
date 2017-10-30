import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorComponent} from "./investor.component";
import {Account} from "./screen/account/account";


@NgModule({
  imports: [InvestorRouting],
  declarations: [InvestorComponent,Account]
})
export class InvestorModule {}
