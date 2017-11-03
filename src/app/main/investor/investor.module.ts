import { NgModule } from '@angular/core';
import {InvestorRouting} from "./investor.routing";
import {InvestorComponent} from "./investor.component";
import {InvestorProfile} from "./screen/account/profile";
import {SharedModule} from "../../common/share.module";
import {Market} from "./screen/marketWatch/market";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ModalModule} from "ngx-bootstrap";
import {HttpModule} from "@angular/http";
import {TransactionManagement} from "./screen/transaction-management/transaction-management";
import {AssetManagement} from "./screen/asset-management/asset-management";
import {Report} from "./screen/report/report";
import {BuyTrading} from "./modal/buy-trading/buy-trading";
import {BuyNew} from "./modal/buy-new/buy-new";
import {SellProduct} from "./modal/sell-product/sell-product";

@NgModule({
  imports: [
    InvestorRouting,
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
    InvestorComponent,
    InvestorProfile,
    Market,
    TransactionManagement,
    AssetManagement,
    Report,
    //Modal
    BuyTrading,
    BuyNew,
    SellProduct
  ]
})
export class InvestorModule {}
