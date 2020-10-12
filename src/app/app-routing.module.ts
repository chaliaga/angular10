import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  { path: 'app-menu', component: MenuComponent },
  { path: 'app-order', component: OrderComponent },
  { path: '', redirectTo: '/app-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
