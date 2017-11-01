import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LanguageUtilComponent} from "./components/language.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LanguageUtilComponent,
  ],
  exports: [LanguageUtilComponent]
})
export class SharedModule{ }
