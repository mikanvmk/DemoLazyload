import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Constant} from "../../common/constant";

@Component({
  selector:"Login",
  templateUrl:"./login.html"
})

export class Login {

  public Constant =  Constant;

  constructor(private router:Router){

  }

  login() {
    this.router.navigate([Constant.url_issuer_profile])
  }

}
