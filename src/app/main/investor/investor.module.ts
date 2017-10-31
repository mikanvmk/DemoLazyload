import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorAccount} from "./screen/account/account";
import {InvestorComponent} from "./investor.component";

@NgModule({
  imports: [InvestorRouting],
  declarations: [InvestorComponent,InvestorAccount]
})
export class InvestorModule {}
