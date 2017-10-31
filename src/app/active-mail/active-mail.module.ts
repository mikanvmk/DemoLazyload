import { NgModule } from '@angular/core';
import {ActiveMailRouting} from "./active-mail.routing";
import {ActiveMailComponent} from "./active-mail.component";
import {Success} from "./success/success";
import {Fail} from "./fail/fail";
import {ResetPassword} from "./reset-password/reset-password";

@NgModule({
  imports: [ActiveMailRouting],
  declarations: [
    ActiveMailComponent,
    ResetPassword,
    Success,
    Fail
  ]
})
export class ActiveMailModule {}
