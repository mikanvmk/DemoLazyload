import { NgModule } from '@angular/core';
import {IssuerRouting} from "./issuer.routing";
import {IssuerComponent} from "./issuer.component";
import {Account} from "./screen/account/account";


@NgModule({
  imports: [IssuerRouting],
  declarations: [IssuerComponent,Account]
})
export class IssuerModule {}
