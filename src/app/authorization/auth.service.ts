import {Injectable} from '@angular/core';
import {HttpService} from "../common/service/http.service";
import {Constant} from "../common/constant";

@Injectable()
export class AuthService {

  constructor(private http:HttpService) {}

  login(data) {
    return this.http.post(Constant.api_auth_sign_in,data)
  }

  forgotPassword(data) {
    return this.http.post(Constant.api_auth_forgot_pass,data)
  }
}
