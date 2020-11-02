import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuMaterialComponent } from './menu/menu-material.component';
import { TableDataSource } from './table/table-datasource';
import { DashComponent } from './dash/dash.component';
import { TreeComponent } from './tree/tree.component';
import { ContactComponent } from './contact/contact.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

const routes: Routes = [
    {
      path: '',
      component: MenuMaterialComponent,
      children: [
        { path: '', redirectTo: 'dash', pathMatch: 'full' },
        { path: 'table', component: TableDataSource },
        { path: 'dash', component: DashComponent },
        { path: 'tree', component: TreeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'hola-mundo', component: HolaMundoComponent },
        { path: '**', redirectTo: 'dash'}
      ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class MaterialRoutingModule {
}
