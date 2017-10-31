import { NgModule } from '@angular/core';
import {IssuerRouting} from "./issuer.routing";
import {IssuerComponent} from "./issuer.component";
import {IssuerProfile} from "./screen/profile/profile";

@NgModule({
  imports: [IssuerRouting],
  declarations: [IssuerComponent,IssuerProfile]
})
export class IssuerModule {}
