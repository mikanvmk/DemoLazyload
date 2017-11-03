import {Component, AfterViewInit, Input} from '@angular/core';

// service
import {AppComponent} from '../../app.component';
import {Constant} from "../constant";
import {DataService} from "../service/data.service";
import {HttpService} from "../service/http.service";
import {DialogService} from "../service/dialog.service";
import {TranslateService} from "@ngx-translate/core";

declare let $: any;

@Component({
  selector: 'util-language',
  template: `
    <select id="language" class="language"
            [(ngModel)]="currentLang" name="currentLang" (change)="selectLang(currentLang)">
      <option *ngFor="let item of dataService.listLanguage" [value]="item.code"
              [selected]="currentLang === item.code"
      >{{item.name}}
      </option>
    </select>
  `
})

export class LanguageUtilComponent implements AfterViewInit {

  // Declare variable
  currentLang = localStorage.getItem(Constant.key_local_language);
  @Input('reload') reload: boolean = true;

  /**
   * function first run
   * */
  constructor(private http: HttpService,
              private dialog: DialogService,
              private loading: AppComponent,
              private translate: TranslateService,
              public dataService: DataService) {
    this.loading.showLoading();
    if (!this.dataService.listLanguage) {
      this.dataService.getListLanguage(this.http)
        .then((error: any) => {
          if (!error) {
            this.init();
          } else {
            this.dialog.showError(error.message)
          }
          this.loading.hideLoading();
        });
    }else this.init()
  }

  init() {
    let params = new URLSearchParams(location.href.substring(location.href.indexOf('?') + 1, location.href.length));
    let lang = params.get('language');
    if (lang) {
      this.dataService.currentLang = lang;
      localStorage.setItem(Constant.key_local_language, lang);
      this.translate.use(lang);
    }
    if (this.dataService.currentLang) {
      setTimeout(() => {
        $('#language').selectpicker('val', this.dataService.currentLang);
      }, 0)
    }

    setTimeout(() => {
      $('#language').selectpicker(Constant.const_refresh_select);
    }, 0);
    this.loading.hideLoading()
  }

  /**
   * function handle when change language
   * @Params language
   * */
  selectLang(language) {

    this.loading.showLoading();
    // set current language
    this.dataService.currentLang = language;
    // save local
    localStorage.setItem(Constant.key_local_language, language);
    if (this.reload) {
      setTimeout(() => {
        location.reload()
      }, 500)
    } else {
      this.translate.use(language);
      this.loading.hideLoading();
    }
  }

  /**
   * function call back when init view done
   * */
  ngAfterViewInit() {
    setTimeout(() => {
      $('#language').selectpicker();
    }, 0)
  }

}
