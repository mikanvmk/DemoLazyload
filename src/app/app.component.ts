import {Component, ViewChild} from '@angular/core';
import {Constant} from "./common/constant";
import {ModalDirective} from "ngx-bootstrap";
import {TranslateService} from "@ngx-translate/core";
import {HttpService} from "./common/service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Constant = Constant;
  @ViewChild('loadingModal') loadingModal : ModalDirective;

  constructor(private translate:TranslateService,private http:HttpService) {
    // Add list language
    translate.addLangs(['en_US', 'vi_VN']);

    /**
     * Check local lang null then using language default
     * Else using language select in local
     * */
    const lang = localStorage.getItem(Constant.key_local_language);
    if (!lang || lang === 'null') {
      translate.use(Constant.default_language);
      this.getJSONTranslateAPI(Constant.default_language);
      localStorage.setItem(Constant.key_local_language, Constant.default_language);
    } else {
      this.getJSONTranslateAPI(lang);
      translate.use(lang)
    }
  }

  getJSONTranslateAPI(lang) {
    this.http.get(Constant.api_common_translations + lang)
      .subscribe((res:any)=>{
        Object.keys(res).map(key=>{
          let item = res[key];
          Object.keys(item).map(child=>{
            if (item[child]) {
              this.translate.set(child,item[child])
            }
          })
        })
      },error=>{
        console.log(error)
      })
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
