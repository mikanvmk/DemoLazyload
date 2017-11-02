import {Component, ViewChild} from "@angular/core";
import {Constant} from "../constant";
import {DialogService} from "../service/dialog.service";
import {ModalDirective} from "ngx-bootstrap";

/**
 * declare Jquery
 * */
declare let $: any;

@Component({
  selector:"popup-error",
  template: `
    <!--Error modal-->
    <div class="modal fade" bsModal #errorModal="bs-modal" [config]="{backdrop: 'static'}"
         id="errorModal"
         tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="closeError()"><img src="{{Constant.icon_url_close}}">
            </button>
            <div class="form-title__modal text-center">
              <label class="form-title__header">{{'common.message.error' | translate}}</label>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-12 info-account">
                <div class="col-xs-12 col-md-12 message">
                  <h4>{{dialog.dialogMessage}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="modal-body row">
              <div class="col-xs-3">
              </div>
              <div class="col-xs-6">
                <button class="btn btn-print" (click)="submitErrorModal()">{{ 'common.button.ok' | translate}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class PopupError {

  public Constant = Constant;

  constructor(public dialog:DialogService) {

  }

  closeError() {
    $('#errorModal').modal('toggle');
    this.dialog.dialogMessage = null;
  }

  submitErrorModal() {
    $('#errorModal').modal('toggle');
    this.dialog.dialogMessage = null;
  }


}
