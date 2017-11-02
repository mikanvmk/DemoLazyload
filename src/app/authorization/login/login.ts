import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Constant} from "../../common/constant";
import {DataService} from "../../common/service/data.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {DialogService} from "../../common/service/dialog.service";
import {UserService} from "../../common/service/user.service";
import {AppComponent} from "../../app.component";

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
    private dialog:DialogService,
    private user:UserService,
    private loading:AppComponent
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
        .subscribe(res=>{
          if (res.status === Constant.success_code) {
            let status = res.data.profile.status;

            //Check status user is pending
            if (status !== Constant.status_user_pending) {

              //Save infor user
              this.dataService.token = res.data.tokenType + " " + res.data.accessToken;
              localStorage.setItem(Constant.key_local_token, this.dataService.token);
              this.user.setProfile(res.data.profile);

              //Check status investor is first login
              if (status === Constant.status_first_login) {
                //Go to screen required when first login
                this.router.navigate([Constant.url_first_login])
              } else {
                let userType = res.data.profile.userType;
                //Go to account
                if (userType === Constant.CODE_INVESTOR) {
                  // this.router.navigate(['/main' + Constant.screen_investor_market])
                } else {
                  // this.router.navigate(['/main' + Constant.screen_issuer_products])
                }
              }
            }
          }
          this.isLoading = false;
        },error=>{
          this.isLoading = false;
          if (error.status) {
            this.dialog.showError(error.message)
          }
        })
    }
  }

}
