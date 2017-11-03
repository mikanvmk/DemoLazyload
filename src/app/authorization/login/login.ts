import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Constant} from "../../common/constant";
import {DataService} from "../../common/service/data.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {UserService} from "../../common/service/user.service";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"Login",
  templateUrl:"./login.html"
})

export class Login implements AfterViewInit {

  public Constant =  Constant;
  @ViewChild('loginForm') loginForm : NgForm;

  isLoading = false;

  constructor(
    private router:Router,
    private dataService:DataService,
    private authService:AuthService,
    private user:UserService
  ){

  }

  ngAfterViewInit() {
    setTimeout(()=>{
      $('#loginForm').formValidation({
        framework: 'bootstrap',
        icon: {
          valid: 'glyphicon',
          invalid: 'glyphicon',
          validating: 'glyphicon glyphicon-refresh'
        },
        addOns: {
          i18n: {}
        },
        locale: this.dataService.currentLang
      });
    },0)
  }

  onSubmit(value) {
    if (this.loginForm.form.valid) {
      this.isLoading = true;
      this.authService.login(value)
        .then(res=>{
          if (res) {
            //Check status investor is first login
            if (this.user.status === Constant.status_first_login) {
              //Go to screen required when first login
              this.router.navigate([Constant.url_first_login])
            } else {
              //Go to account
              if (this.user.userType === Constant.CODE_INVESTOR) {
                // this.router.navigate(['/main' + Constant.screen_investor_market])
              } else {
                // this.router.navigate(['/main' + Constant.screen_issuer_products])
              }
            }
          }
          this.isLoading = false;
        })
    }
  }

}
