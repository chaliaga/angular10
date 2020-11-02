import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrderComponent } from './component/order/order.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { CountryComponent } from './country/country.component';
import { PrefixPipe } from './util/prefix.pipe';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { MenubarModule } from 'primeng/menubar';
import { ColorSpicyPipe } from './util/color-spicy.pipe';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialAllModule } from './material-all.module';
import { MessageService } from 'primeng/api';

Amplify.configure(awsconfig);

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        OrderComponent,
        CountryComponent,
        PrefixPipe,
        ColorSpicyPipe,
        PostComponent
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
        MessagesModule,
        AmplifyUIAngularModule,
        MenubarModule,
        InputNumberModule,
        ProgressSpinnerModule,
        HttpClientModule,
        ReactiveFormsModule,
        LayoutModule,
        MaterialAllModule
    ],
    providers: [ HttpClient, MessageService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
