import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {Constant} from "../common/constant";

@Component({
  selector:"active-mail",
  templateUrl:"./active-mail.component.html"
})

export class ActiveMailComponent {

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
}
