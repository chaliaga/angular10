import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';
import { DishComponent } from './component/dish/dish.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import { CountryComponent } from './country/country.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        OrderComponent,
        DishComponent,
        CountryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        RatingModule,
        FormsModule,
        AccordionModule,
        MessagesModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
