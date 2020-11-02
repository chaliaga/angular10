import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { TableComponent } from './table/table.component';
import { MenuMaterialComponent } from './menu/menu-material.component';
import { MaterialAllModule } from '../material-all.module';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ContactComponent,
        TreeComponent,
        DashComponent,
        TableComponent,
        MenuMaterialComponent,
        HolaMundoComponent
    ],
    imports: [
        CommonModule,
        MaterialRoutingModule,
        MaterialAllModule,
        ReactiveFormsModule
    ]
})
export class MaterialModule {
}
