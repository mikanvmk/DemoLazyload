import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorComponent} from "./investor.component";
import {InvestorProfile} from "./screen/account/profile";

@NgModule({
  imports: [InvestorRouting],
  declarations: [InvestorComponent,InvestorProfile]
})
export class InvestorModule {}
