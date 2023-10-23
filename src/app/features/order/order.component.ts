import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../shared/services/order.service";
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {nameValidator} from "../../shared/directives/user-name-validator.directive";
import {numberPhoneValidator} from "../../shared/directives/number-phone-validator.directive";
import {addressValidator} from "../../shared/directives/address-validator.directive";



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {



  orderForm = new FormGroup({
    productTitle: new FormControl(''),
    userName: new FormControl('', [Validators.required, nameValidator]),
    userLastName: new FormControl('', [Validators.required, nameValidator]),
    phone: new FormControl('', [Validators.required, numberPhoneValidator]),
    country: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, addressValidator]),
    comment: new FormControl(''),
  })


  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private router: Router
              ) {
  }


  isValid: boolean = false;
  submitted: boolean = false;
  success: boolean | null = null;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          productTitle: params['product']
        });
      }
    })
  }


  create() {
    const data = {
      name: this.orderForm.get('userName')?.value as string,
      last_name: this.orderForm.get('userName')?.value as string,
      phone: this.orderForm.get('userName')?.value as string,
      country: this.orderForm.get('userName')?.value as string,
      zip: this.orderForm.get('userName')?.value as string,
      product: this.orderForm.get('userName')?.value as string,
      address: this.orderForm.get('userName')?.value as string,
      comment: this.orderForm.get('userName')?.value as string,
    }

    this.orderService.createOrder(data)
      .subscribe(response => {
        if (response.success) {
          this.submitted = true;
          this.success = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 4000);
        } else {
          this.submitted = true;
          this.success = false;
          setTimeout(() => {
          }, 3000);
        }
      });

    this.orderForm.reset();

  }


}
