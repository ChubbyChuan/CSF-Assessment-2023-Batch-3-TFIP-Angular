import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PendingOrder } from '../model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  //Autowired
  activatedRoute = inject(ActivatedRoute)
  pizzaSvc = inject(PizzaService)

  email = ''
  orders: PendingOrder[] = [];

  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.params['email']
    this.getOrders();

  }

  getOrders() {
    this.pizzaSvc.getOrders(this.email).subscribe(
      (orders: PendingOrder[]) => {
        this.orders = orders;
      },
      (error: any) => {
        console.error('Error occurred while retrieving orders:', error);
      }
    );
  }
  markAsDelivered(orderId: string) {
    this.pizzaSvc.delivered(orderId);
    console.log(`Order ${orderId} marked as delivered`);
  }
  
}
