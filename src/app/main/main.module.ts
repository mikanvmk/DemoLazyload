import {NgModule} from '@angular/core';
import {MainRouting} from "./main.routing";
import {MainComponent} from "./main.component";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";

@NgModule({
  imports: [
    MainRouting,
    NgIdleKeepaliveModule.forRoot()
  ],
  declarations : [MainComponent]
})
export class MainModule {
}
