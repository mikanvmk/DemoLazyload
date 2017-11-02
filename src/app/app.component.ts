import {Component, ViewChild} from '@angular/core';
import {Constant} from "./common/constant";
import {ModalDirective} from "ngx-bootstrap";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Constant = Constant;
  @ViewChild('loadingModal') loadingModal : ModalDirective;

  constructor(private translate:TranslateService) {
    // Add list language
    translate.addLangs(['en_US', 'vi_VN']);

    /**
     * Check local lang null then using language default
     * Else using language select in local
     * */
    const lang = localStorage.getItem(Constant.key_local_language);
    if (!lang || lang === 'null') {
      translate.use(Constant.default_language);
      localStorage.setItem(Constant.key_local_language, Constant.default_language);
    } else {
      translate.use(lang)
    }
  }

  public showLoading() {
    setTimeout(() => {
      this.loadingModal.show();
    }, 0);
  }

  public hideLoading() {
    setTimeout(() => {
      this.loadingModal.hide();
    }, 500);
  }

}
