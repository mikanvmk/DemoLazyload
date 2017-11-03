import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Constant} from "../../common/constant";
import {NgForm} from "@angular/forms";
import {DataService} from "../../common/service/data.service";
import {ActiveMailService} from "../active-mail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../../common/service/dialog.service";
import {TranslateService} from "@ngx-translate/core";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"reset-password",
  templateUrl:"./reset-password.html"
})

export class ResetPassword implements AfterViewInit {

  @ViewChild('resetPassForm') resetPassForm : NgForm;
  public Constant = Constant;

  token = null;
  isLoading = false;

  constructor(
    private dataService:DataService,
    private activeService:ActiveMailService,
    private router:Router,
    private actiRoute:ActivatedRoute,
    private dialog:DialogService,
    private translate:TranslateService
  ) {

  }

  ngAfterViewInit() {
    if (!this.checkResponse()) return;
    setTimeout(()=>{
      $('#resetPassForm').formValidation({
        framework: 'bootstrap',
        icon: {
          valid: 'glyphicon',
          invalid: 'glyphicon',
          validating: 'glyphicon glyphicon-refresh'
        },
        addOns: {
          i18n: {}
        },
        locale: this.dataService.currentLang,
        fields: {
          confirmPassword: {
            validators: {
              identical: {
                field: 'password'
              }
            }
          }
        }
      });
    },0)
  }

  checkResponse():boolean {
    let params = new URLSearchParams(location.href.substring(location.href.indexOf('?') + 1, location.href.length));
    let code = params.get('code');
    let lang = params.get('language');
    if (parseInt(code) !== Constant.success_code) {
      let msg = params.get('msg');
      this.router.navigate([Constant.url_active_mail_fail], {
        queryParams: {
          msg: msg,
          screen: 'reset',
          language: lang,
          code: code
        }
      });
      return false
    }
    //Get token in params
    this.actiRoute.params.subscribe(params => {
      this.token = params[Constant.key_local_token];
      console.log(this.token)
    });
    return true
  }

  onSubmit(data) {
    if (this.resetPassForm.form.valid){
      data.token = this.token;
      this.isLoading = true;
      this.activeService.resetPassword(data)
        .then(res=>{
          if (res) {
            this.dialog.showSuccess(this.translate.instant('resetPass.message.resetSuccess'))
              .then(res=>{
                if (res) this.router.navigate([Constant.url_login])
              });
          }
          this.isLoading = false;
          $('#resetPassForm').data('formValidation').resetForm();
        })
    }
  }

}
