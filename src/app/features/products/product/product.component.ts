import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{
  product: ProductType;
  private subscribeGetProduct: Subscription | null = null;

constructor(private productService: ProductService,
            private router: Router,
            private activateRoute: ActivatedRoute) {
  this.product = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }
}

  ngOnInit(): void {
    this.subscribeGetProduct = this.activateRoute.params.subscribe((params) => {
      if (params['id']) {

        this.productService.getProduct(+params['id'])
          .subscribe({
            next: value => {
              if (value === null) {
                this.router.navigate(['/']);
              }
              this.product = value;
            },
            error: (err => {
              this.router.navigate(['/']);
            })
          })
      }
    });
  }

  ngOnDestroy() {
    this.subscribeGetProduct?.unsubscribe();
  }
}
