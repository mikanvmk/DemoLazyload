import {Injectable} from "@angular/core";

/**
 * declare Jquery
 * */
declare let $: any;

@Injectable()
export class DialogService {
  public dialogMessage:string;
  public dialogTitle:string;
  public isUpdateNAV:boolean;
  public dialogConfirmation: () => void;
  public dialogRejection: () => void;
  public dialogClose: () => void;
  public dialogSubmit: () => void;

  confirm(message: string,isUpdateNAV?:boolean) {
    this.dialogMessage = message;
    this.isUpdateNAV = isUpdateNAV;

    return new Promise<boolean>((resolve, reject) =>{
      this.dialogConfirmation = () => {
        $('#confirm-dialog').modal('toggle');
        resolve(true)
      };
      this.dialogRejection = () => {
        $('#confirm-dialog').modal('toggle');
        resolve(false)
      };
      this.dialogClose = () => {
        $('#confirm-dialog').modal('toggle');
        reject(true)
      };
      $('#confirm-dialog').modal('toggle');
    });
  };

  showError(message: string,title?:string){
    this.dialogMessage = message;
    this.dialogTitle = title;
    $('#errorModal').modal('toggle');
  }

  showSuccess(message: string,title?:string) {
    this.dialogMessage = message;
    this.dialogTitle = title;
    return new Promise<boolean>((resolve, reject) =>{
      this.dialogSubmit = () => {
        $('#successModal').modal('toggle');
        this.dialogMessage = null;
        this.dialogTitle = null;
        resolve(true)
      };
      this.dialogClose = ()=>{
        $('#successModal').modal('toggle');
        this.dialogMessage = null;
        this.dialogTitle = null;
        resolve(false)
      };
      $('#successModal').modal('toggle');
    })
  }
}
