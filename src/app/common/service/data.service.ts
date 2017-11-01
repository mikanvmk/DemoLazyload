import {Injectable} from '@angular/core';
import {Constant} from "../constant";
import {HttpService} from "./http.service";

@Injectable()
export class DataService {
  get listLanguage(): Array<any> {
    return this._listLanguage;
  }

  set listLanguage(value: Array<any>) {
    this._listLanguage = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get   currentLang(): string {
    return this._currentLang;
  }

  set currentLang(value: string) {
    this._currentLang = value;
  }

  private _token: string = localStorage.getItem(Constant.key_local_token);

  private _currentLang: string = localStorage.getItem(Constant.key_local_language) ? localStorage.getItem(Constant.key_local_language) : Constant.default_language;

  private _listLanguage:Array<any> = null;

  getListLanguage(http:HttpService) {
    return new Promise<boolean>((resolve, reject) =>{
      http.get(Constant.api_common_language)
        .subscribe(res=>{
          if (res.status === Constant.success_code){
            this.listLanguage = res.data;
            resolve(null)
          }
        },error=>{
          resolve(error)
        })
    })
  }
}
