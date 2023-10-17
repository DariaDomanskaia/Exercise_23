import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { OrderComponent } from './components/pages/order/order.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { ReduceTextPipe } from "./pipes/reduce-text.pipe";
import { ProductComponent } from './components/pages/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { UserNameValidatorDirective } from './directives/user-name-validator.directive';
import { NumberPhoneValidatorDirective } from './directives/number-phone-validator.directive';
import { AddressValidatorDirective } from './directives/address-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    OrderComponent,
    ProductCardComponent,
    ReduceTextPipe,
    ProductComponent,
    UserNameValidatorDirective,
    NumberPhoneValidatorDirective,
    AddressValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ProductService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
