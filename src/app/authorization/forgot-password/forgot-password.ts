import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Constant} from "../../common/constant";
import {DataService} from "../../common/service/data.service";
import {ReCaptchaService} from "angular2-recaptcha/lib/captcha.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"forgot-password",
  templateUrl:"./forgot-password.html"
})

export class ForgotPassword implements AfterViewInit {

  public Constant = Constant;
  @ViewChild('forgotForm') forgotForm : NgForm;

  isLoading = false;
  recaptchaToken = null;
  sendMailDone = false;

  constructor(
    public dataService:DataService,
    private recaptChaService:ReCaptchaService,
    private authService:AuthService
  ) {

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
      $('#forgotForm').formValidation({
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

  /**
   * get response
   * */
  resolved(response){
    this.recaptchaToken = response;
    // Set value for fields
    $('#forgotForm')
      .find('.help-block[data-fv-for="captcha"]').hide();
  }


  onSubmit(value) {
    try {
      if (grecaptcha.getResponse() === ""){
        this.resolved("");
        return
      }
    }catch (e) {

    }
    this.isLoading = true;
    if (this.forgotForm.form.valid && this.recaptchaToken) {
      this.authService.forgotPassword(value)
        .then(res=>{
          this.sendMailDone = true;
          this.isLoading = false;
        })
    }
  }

}
