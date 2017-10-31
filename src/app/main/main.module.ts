import {NgModule} from '@angular/core';
import {MainRouting} from "./main.routing";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [MainRouting],
  declarations : [MainComponent]
})
export class MainModule {
}
