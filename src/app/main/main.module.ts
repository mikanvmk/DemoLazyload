import {NgModule} from '@angular/core';
import {MainRouting} from "./main.routing";
import {MainComponent} from "./main.component";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";
import {InforNew} from "./components/modal-infor-new/infor-new";
import {InforTrading} from "./components/modal-infor-trading/infor-trading";

@NgModule({
  imports: [
    MainRouting,
    NgIdleKeepaliveModule.forRoot()
  ],
  declarations : [
    MainComponent,
    InforNew,
    InforTrading
  ]
})
export class MainModule {
}
