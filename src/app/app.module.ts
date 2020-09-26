import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';
import { DishComponent } from './component/dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
