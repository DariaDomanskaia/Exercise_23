import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {tap} from "rxjs";
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{

  constructor(private productService: ProductService,
              private router: Router,
              ) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.products = data;
          },
          error: (error) => {
            this.router.navigate(['/']);
          }
        }
      )
  }
}
