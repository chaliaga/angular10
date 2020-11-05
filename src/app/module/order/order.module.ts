import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
