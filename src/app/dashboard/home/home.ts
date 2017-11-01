import {Component} from "@angular/core";
import {Constant} from "../../common/constant";
import {HttpService} from "../../common/service/http.service";
import {DialogService} from "../../common/service/dialog.service";

@Component({
  selector : "home",
  templateUrl : './home.html'
})

export class Home {

  public Constant = Constant;

  constructor(private http:HttpService,private dialog:DialogService) {

  }

  showError() {
    this.dialog.showError("hihi")
  }
}
