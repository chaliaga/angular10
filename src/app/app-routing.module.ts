import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  { path: 'app-menu', component: MenuComponent, data: { animation: 'Menu'} },
  { path: 'app-order', component: OrderComponent, data: { animation: 'Order'} },
  { path: 'app-post', component: PostComponent, data: { animation: 'Order'} },
  { path: '', redirectTo: '/app-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
