import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    /*
  { path: 'app-menu', component: AppComponent },
  { path: '', redirectTo: '/app-menu', pathMatch: 'full' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
