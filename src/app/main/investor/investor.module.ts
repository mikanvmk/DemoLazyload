import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorComponent} from "./investor.component";
import {InvestorProfile} from "./screen/account/profile";
import {SharedModule} from "../../common/share.module";
import {FirstLogin} from "./screen/first-login/first-login";

@NgModule({
  imports: [InvestorRouting,SharedModule],
  declarations: [
    InvestorComponent,
    InvestorProfile,
    FirstLogin
  ]
})
export class InvestorModule {}
