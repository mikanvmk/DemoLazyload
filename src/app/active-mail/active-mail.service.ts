import {Injectable} from '@angular/core';
import {HttpService} from "../common/service/http.service";
import {Constant} from "../common/constant";
import {DialogService} from "../common/service/dialog.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ActiveMailService {

  constructor(
    private http:HttpService,
    private dialog:DialogService,
    private translate:TranslateService
  ) {}


  resetPassword(data) {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(Constant.api_auth_reset_pass,data)
        .subscribe(res=>{
          if (res.status === Constant.success_code){
            resolve(true)
          }else {
            this.handleError();
            resolve(false)
          }
        },error=>{
          this.handleError(error);
          resolve(false)
        })
    })
  }

  handleError(error?) {
    if (error.status){
      this.dialog.showError(error.message)
    }
    if (!error) this.dialog.showError(this.translate.instant('error.server'))
  }
}
