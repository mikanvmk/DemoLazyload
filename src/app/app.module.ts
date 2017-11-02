import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {AppRouting} from "./app.routing";
import {AppComponent} from './app.component';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ConfirmDialog} from "./common/components/confirm-modal";
import {DataService} from "./common/service/data.service";
import {UserService} from "./common/service/user.service";
import {PopupError} from "./common/components/popup-error";
import {DialogService} from "./common/service/dialog.service";
import {HttpService} from "./common/service/http.service";
import {ModalModule} from "ngx-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FileSaverModule} from "ngx-filesaver";
import {Constant} from "./common/constant";
import {AuthService} from "./authorization/auth.service";
import {ReCaptchaService} from "angular2-recaptcha/lib/captcha.service";

// Create folder load file json language
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    //common
    ConfirmDialog,
    PopupError
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    CommonModule,
    HttpModule,
    ModalModule.forRoot(),
    FileSaverModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    DataService,
    UserService,
    DialogService,
    HttpService,
    AuthService,
    ReCaptchaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        let currentScreen = sessionStorage.getItem(Constant.key_local_current_screen);
        let screenFirstLogin = event.url !== Constant.url_first_login;
        let screenActiveMail = event.url.substring(0,19) !== Constant.url_active_mail_success
          && event.url.substring(0,16) !== Constant.url_active_mail_fail
          && event.url.substring(0,15) !== Constant.url_reset_pass;

      }
      if (event instanceof NavigationEnd) {
        sessionStorage.setItem(Constant.key_local_current_screen, event.url)
      }
    })
  }
}
