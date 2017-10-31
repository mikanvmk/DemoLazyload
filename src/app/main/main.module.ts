import {NgModule} from '@angular/core';
import {MainRouting} from "./main.routing";
import {IssuerModule} from "./issuer/issuer.module";
import {InvestorModule} from "./investor/investor.module";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [MainRouting, IssuerModule, InvestorModule],
  declarations : [MainComponent]
})
export class MainModule {
}
