import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorComponent} from "./investor.component";


@NgModule({
  imports: [InvestorRouting],
  declarations: [InvestorComponent]
})
export class InvestorModule {}
