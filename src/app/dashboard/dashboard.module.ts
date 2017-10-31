import { NgModule } from '@angular/core';
import {DashboardRouting} from "./dashboard.routing";
import {Home} from "./home/home";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [DashboardRouting],
  declarations: [DashboardComponent,Home]
})
export class DashboardModule {}
