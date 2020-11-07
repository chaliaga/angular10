import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { DishComponent } from './dish/dish.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dish', pathMatch: 'full' },
            { path: 'dish', component: DishComponent },
            { path: 'category', component: CategoryComponent },
            { path: '**', redirectTo: 'dish'}
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {
}
