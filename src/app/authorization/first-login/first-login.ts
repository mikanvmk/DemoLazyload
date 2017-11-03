import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {Constant} from "../../common/constant";
import {DataService} from "../../common/service/data.service";
import {AuthService} from "../auth.service";
import {createNumberMask} from "text-mask-addons/dist/textMaskAddons";
import {HttpService} from "../../common/service/http.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"first-login",
  templateUrl:"./first-login.html"
})

export class FirstLogin implements AfterViewInit{

  @ViewChild('firstLoginForm') firstLoginForm:NgForm;
  public Constant = Constant;

  phoneMask = createNumberMask({
    prefix: '',
    suffix: '',
    allowDecimal: false,
    allowLeadingZeroes : true,
    includeThousandsSeparator : false,
    integerLimit : 12
  });
  country = null;
  phone = null;
  infor = true;
  isLoading = false;

  constructor(
    public dataService:DataService,
    private authService:AuthService,
    private http:HttpService,
    private router:Router
  ) {
    this.authService.getListCountry()
      .then(res=>{
        setTimeout(()=>{
          $('.Country').selectpicker();
        },0)
      })
  }

  ngAfterViewInit() {
    $('#firstLoginForm')
      .find('[name="phone"]')
      .intlTelInput({
        utilsScript: Constant.url_lib_phone,
        autoPlaceholder: true,
        preferredCountries: ['vn', 'us']
      });

    // set form validation
    $('#firstLoginForm')
      .formValidation({
        framework: 'bootstrap',
        icon: {
          valid: 'glyphicon',
          invalid: 'glyphicon',
          validating: 'glyphicon'
        },
        addOns: {
          i18n: {}
        },
        locale: this.dataService.currentLang
      })
      /**
       * handle click icon country phone
       * */
      .on('click', '.country-list', function() {
        $('#registerForm').formValidation('revalidateField', 'phone');
      });
  }

  onSubmit(data) {
    if (this.firstLoginForm.form.valid && data.phone.length >= 6) {
      this.isLoading = true;
      let str = $('.selected-flag')[0].title;
      data.phonePostal = str.substring(str.indexOf(': ')+3,str.length);
      this.authService.forgotPassword(data)
        .then(res=>{
          if (res) {
            this.router.navigate([Constant.url_investor_profile])
          }
          this.isLoading = false;
          $('#firstLoginForm').data('formValidation').resetForm();
        })
    }
  }

  cancel() {
    this.http.logout()
  }

  gotoHome() {
    this.authService.gotoHome()
      .then(res=>{
        this.router.navigate([Constant.url_home])
      })
  }

  selectCountry(country) {
    let $phone = $('#firstLoginForm').find('[name="phone"]');
    $phone.intlTelInput("setCountry", country);
  }
}
