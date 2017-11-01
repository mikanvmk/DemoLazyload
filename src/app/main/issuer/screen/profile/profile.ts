import {Component} from "@angular/core";
import {Constant} from "../../../../common/constant";
import {DialogService} from "../../../../common/service/dialog.service";

@Component({
  selector : "profile",
  templateUrl:"./profile.html"
})

export class IssuerProfile {

  public Constant = Constant;

  constructor(
    private dialog:DialogService
  ) {

  }

  confirm() {
    this.dialog.confirm("hihi")
      .then(res=>{
        console.log(res)
      })
  }
}
