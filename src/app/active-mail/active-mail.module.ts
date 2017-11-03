import { NgModule } from '@angular/core';
import {ActiveMailRouting} from "./active-mail.routing";
import {ActiveMailComponent} from "./active-mail.component";
import {Success} from "./success/success";
import {Fail} from "./fail/fail";
import {ResetPassword} from "./reset-password/reset-password";
import {SharedModule} from "../common/share.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../app.module";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ActiveMailRouting,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
  ],
  exports :[
    CommonModule,
    FormsModule
  ],
  declarations: [
    ActiveMailComponent,
    ResetPassword,
    Success,
    Fail
  ]
})
export class ActiveMailModule {}
