import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { PendingOrder } from "./model";
import { Observable } from "rxjs";

@Injectable()
export class PizzaService {

  http = inject(HttpClient)
  // TODO: Task 3
  // You may add any parameters and return any type from placeOrder() method
  // Do not change the method name
  placeOrder(name: string, email: string, size: number, base: string, sauce: string, toppings: string[], comments: string) {


  // Create a FormData object to send the data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("size", size.toString());
    formData.append("base", base);
    formData.append("sauce", sauce);
    formData.append("toppings", JSON.stringify(toppings));
    formData.append("comments", comments);
    return this.http.post<any>('/api/order', FormData)
  }

  // TODO: Task 5
  // You may add any parameters and return any type from getOrders() method
  // Do not change the method name
  getOrders(email: string): Observable<PendingOrder[]> {
        return this.http.get<PendingOrder[]>(`/api/orders/${email}`);
  }
  

  // TODO: Task 7
  // You may add any parameters and return any type from delivered() method
  // Do not change the method name
  delivered(orderId: string) {
    return this.http.delete<any>(`/api/orders/${orderId}`);
  }

}
