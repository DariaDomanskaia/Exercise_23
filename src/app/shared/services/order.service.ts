import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderFormType} from "../../../types/order-form.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(data: OrderFormType) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data);
  }
}
