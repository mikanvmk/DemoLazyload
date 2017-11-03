import {Component} from "@angular/core"
import {DialogService} from "../service/dialog.service";
import {Constant} from "../constant";

@Component({
  selector:'confirm-dialog-modal',
  template: `
    <div class="modal fade" bsModal #confirmModal="bs-modal" [config]="{backdrop: 'static'}" id="confirm-dialog"
         role="dialog" aria-labelledby="mySmallModalLabel" data-backdrop="static">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="close()"><img src="{{Constant.icon_url_close}}">
            </button>
            <div class="form-title__modal text-center">
              <label class="form-title__header">{{'common.message.confirm' | translate}}</label>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-12 info-account">
                <div class="col-xs-12 col-md-12 message">
                  <h4>{{dialogService.dialogMessage}}</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="modal-body row">
              <div class="modal-body row">
                <div class="col-xs-6">
                  <button class="btn btn-print" (click)="confirm()">
                    <div *ngIf="dialogService.isUpdateNAV">{{ 'common.button.Updated' | translate}}</div>
                    <div *ngIf="!dialogService.isUpdateNAV">{{ 'common.label.yes' | translate}}</div>
                  </button>
                </div>
                <div class="col-xs-6">
                  <a class="btn btn-print" (click)="reject()">
                    <div *ngIf="dialogService.isUpdateNAV">{{ 'common.button.notUpdate' | translate}}</div>
                    <div *ngIf="!dialogService.isUpdateNAV">{{'common.label.no' | translate }}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ConfirmDialog {

  public Constant = Constant;

  constructor(public dialogService: DialogService) {}

  close() {
    this.dialogService.dialogClose();
  }

  confirm() {
    this.dialogService.dialogConfirmation();
  }
  reject() {
    this.dialogService.dialogRejection();
  }
}
