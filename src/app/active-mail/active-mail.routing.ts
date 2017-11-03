import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constant} from "../common/constant";
import {Success} from "./success/success";
import {Fail} from "./fail/fail";
import {ResetPassword} from "./reset-password/reset-password";
import {ActiveMailComponent} from "./active-mail.component";

const routes: Routes = [
  {path: '', redirectTo: Constant.url_register_investor, pathMatch: 'full'},
  {
    path: '', component: ActiveMailComponent,
    children: [
        {path: Constant.path_active_success, component: Success},
        {path: Constant.path_active_fail, component: Fail},
        {path: Constant.path_active_reset_pass+"/:token", component: ResetPassword}
      ]
  },

];

export const ActiveMailRouting: ModuleWithProviders = RouterModule.forChild(routes);
