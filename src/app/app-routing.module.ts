import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
    { path: '', redirectTo: 'app-menu', pathMatch: 'full' },
    { path: 'app-menu', component: MenuComponent, data: { animation: 'Menu'} },
    { path: 'app-order', loadChildren: () => import('./module/order/order.module').then(m => m.OrderModule), data: { animation: 'Order' }},
    { path: 'app-post', component: PostComponent, data: { animation: 'Order' } },
    { path: 'app-material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule)},
    { path: 'app-admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)},
    { path: '**', redirectTo: 'app-menu'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
