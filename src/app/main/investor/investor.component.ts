import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {HttpService} from "../../common/service/http.service";
import {Constant} from "../../common/constant";

@Component({
  selector:"investor",
  templateUrl :"./investor.component.html"
})

export class InvestorComponent {

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
}
