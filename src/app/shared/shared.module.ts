import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {AddressValidatorDirective} from "./directives/address-validator.directive";
import {NumberPhoneValidatorDirective} from "./directives/number-phone-validator.directive";
import {UserNameValidatorDirective} from "./directives/user-name-validator.directive";
import {ReduceTextPipe} from "./pipes/reduce-text.pipe";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    AddressValidatorDirective,
    NumberPhoneValidatorDirective,
    UserNameValidatorDirective,
    ReduceTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductCardComponent,
    AddressValidatorDirective,
    NumberPhoneValidatorDirective,
    UserNameValidatorDirective,
    ReduceTextPipe
  ]
})
export class SharedModule { }
