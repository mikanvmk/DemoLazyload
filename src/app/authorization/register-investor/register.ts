import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Constant} from "../../common/constant";
import {DataService} from "../../common/service/data.service";
import {ReCaptchaService} from "angular2-recaptcha/lib/captcha.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {DialogService} from "../../common/service/dialog.service";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"register-investor",
  templateUrl:"./register.html"
})

export class RegisterInvestor implements AfterViewInit{

  @ViewChild('registerForm') registerForm : NgForm;
  public Constant = Constant;

  recaptchaToken = null;
  isLoading = false;

  constructor(
    public dataService:DataService,
    private recaptChaService:ReCaptchaService,
    private authService:AuthService,
    private dialog:DialogService,
    private router:Router,
    private translate:TranslateService
  ){

  }

  ngAfterViewInit() {
    this.recaptChaService.getReady(this.dataService.currentLang)
      .subscribe(res=>{
        setTimeout(()=>{
          let reCaptchaWidth = 304;
          let containerWidth = $('#recaptcha').width();
          let captchaScale = containerWidth / reCaptchaWidth;
          // Apply the transformation
          $('div#recaptcha').css({
            'transform': 'scale(' + captchaScale + ')',
            '-webkit-transform': 'scale(' + captchaScale + ')',
            'transform-origin': '0 0',
            '-webkit-transform-origin': '0 0'
          });
        },0)
      });
    setTimeout(()=>{
      $('#registerForm').formValidation({
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

  /**
   * get response
   * */
  resolved(response){
    this.recaptchaToken = response;
    // Set value for fields
    $('#registerForm')
      .find('.help-block[data-fv-for="captcha"]').hide();
  }

  onSubmit(data) {
    if (data.email && data.password && this.recaptchaToken && data.isAgreed) {
      try {
        if (grecaptcha.getResponse() === ""){
          this.resolved("");
          return
        }
      }catch (e) {

      }
      data.reCaptchaToken = this.recaptchaToken;
      data.userType   = Constant.CODE_INVESTOR;
      this.isLoading = true;
      this.authService.register(data)
        .then((res) => {
          if (res) {
            this.dialog.showSuccess(
              this.translate.instant('success.register'))
              .then(res=>{
                if (res){
                  this.router.navigate([Constant.url_login])
                }
              })
          }else {
            $('#registerForm').data('formValidation').resetForm();
          }
          this.isLoading = false;
        })
    }
  }

}
