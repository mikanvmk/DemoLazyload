import {Injectable} from '@angular/core';
import {HttpService} from "../common/service/http.service";
import {Constant} from "../common/constant";
import {DataService} from "../common/service/data.service";
import {UserService} from "../common/service/user.service";
import {DialogService} from "../common/service/dialog.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class AuthService {

  constructor(
    private http:HttpService,
    private dataService:DataService,
    private user:UserService,
    private dialog:DialogService,
    private translate:TranslateService
  ) {}

  login(data) {
    return new Promise<boolean>((resolve, reject) =>{
      this.http.post(Constant.api_auth_sign_in,data)
        .subscribe(res=>{
          if (res.status === Constant.success_code) {
            let status = res.data.profile.status;

            //Check status user is pending
            if (status !== Constant.status_user_pending) {

              //Save infor user
              this.dataService.token = res.data.tokenType + " " + res.data.accessToken;
              localStorage.setItem(Constant.key_local_token, this.dataService.token);
              this.user.setProfile(res.data.profile);
              resolve(true)
            }
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

  forgotPassword(data) {
    return new Promise<boolean>((resolve, reject) =>{
      this.http.post(Constant.api_auth_forgot_pass,data)
        .subscribe(res=>{
          if (res.status === Constant.success_code) {
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

  register(data) {
    return new Promise<boolean>((resolve,reject)=>{
      this.http.post(Constant.api_auth_sign_up,data)
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

  getListCountry() {
    return new Promise<boolean>((resolve, reject) => {
      if (this.dataService.listCountry) {
        resolve(true)
      }else {
        this.http.get(Constant.api_common_counties)
          .subscribe(res=>{
            if (res.status === Constant.success_code){
              this.dataService.listCountry = res.data;
              resolve(true)
            }else {
              this.handleError();
              resolve(false)
            }
          },error=>{
            this.handleError(error);
            resolve(false)
          })
      }
    })
  }

  firstLoginSubmit(data){
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(Constant.api_user_first_sign_in,data)
        .subscribe(res=>{
          if (res.status === Constant.success_code) {
            this.user.setProfile(res.data);
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

  gotoHome() {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(Constant.api_user_sign_out, {})
        .subscribe( (res)=> {
          resolve(true)
        },error=>{
          resolve(true)
        });
    })
  }

  handleError(error?) {
    if (error.status){
      this.dialog.showError(error.message)
    }
    if (!error) this.dialog.showError(this.translate.instant('error.server'))
  }
}
