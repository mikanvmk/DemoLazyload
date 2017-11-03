import { NgModule } from '@angular/core';
import {IssuerRouting} from "./issuer.routing";
import {IssuerComponent} from "./issuer.component";
import {IssuerProfile} from "./screen/profile/profile";
import {SharedModule} from "../../common/share.module";
import {DialogService} from "../../common/service/dialog.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ModalModule} from "ngx-bootstrap";
import {Portfolio} from "./screen/portfolio/portfolio";
import {CreateProduct} from "./screen/create-product/create-product";
import {TransactionManagement} from "./screen/transaction-management/transaction-management";
import {MoneyTransaction} from "./screen/money-transaction/money-transaction";
import {Report} from "./screen/report/report";

@NgModule({
  imports: [
    IssuerRouting,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
    CommonModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    IssuerComponent,
    IssuerProfile,
    Portfolio,
    CreateProduct,
    TransactionManagement,
    MoneyTransaction,
    Report
  ],
})
export class IssuerModule {}
