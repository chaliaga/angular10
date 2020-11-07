import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DishComponent } from './dish/dish.component';
import { CategoryComponent } from './category/category.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    declarations: [
        AdminComponent,
        DishComponent,
        CategoryComponent ],
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        RippleModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        InputTextModule,
        ToolbarModule,
        DialogModule,
        InputNumberModule
    ]
})
export class AdminModule {
}
