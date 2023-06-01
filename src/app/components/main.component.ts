import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../model';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PIZZA_TOPPINGS: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pizzaSize = SIZES[0]

  constructor() { }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  // instantiating the forms arrays and variable
  OrderForm!: FormGroup


  //@Autowire
  fb = inject(FormBuilder)
  router = inject(Router)


  //onInit
  ngOnInit(): void {
    this.OrderForm = this.createFormWithFormBuilder()
    console.info(">>>>>", this.OrderForm)
  }
  //functions
  process(){
    console.info(">>>>>", this.OrderForm)
    const query = this.OrderForm.value as Order
    this.router.navigate([ '/orders', query.email ])
  }

  //creating form
  private createFormWithFormBuilder(): FormGroup {
    return this.fb.group({
      name:this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email:this.fb.control<string>('', [Validators.required, Validators.email]),
      size:this.fb.control<number>(1, [Validators.required, Validators.min(0)]),
      base:this.fb.control<string>('', [Validators.required, Validators.nullValidator]),
      sauce:this.fb.control<string>('', [Validators.required, Validators.nullValidator]),
      toppings:this.fb.control<string>('', [Validators.required, Validators.nullValidator]),
      comments: this.fb.control<string>(''),
    });
  }

  //invalid function
  invalidForm() {
    return this.OrderForm.invalid
  }
  

  

}
