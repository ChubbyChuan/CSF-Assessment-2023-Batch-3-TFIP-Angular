import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { ViewComponent } from './components/view.component';
import { OrdersComponent } from './components/orders.component';


const appRoute: Routes = [
  { path: '', component: MainComponent, title: 'Main' },
  { path: 'orders/:email', component: OrdersComponent, title: 'Orders' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ViewComponent,
    OrdersComponent,

  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoute), HttpClientModule
  ],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
