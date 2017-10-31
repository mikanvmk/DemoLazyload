import { NgModule } from '@angular/core';
import {IssuerRouting} from "./issuer.routing";
import {IssuerComponent} from "./issuer.component";
import {IssuerAccount} from "./screen/account/account";

@NgModule({
  imports: [IssuerRouting],
  declarations: [IssuerComponent,IssuerAccount]
})
export class IssuerModule {}
