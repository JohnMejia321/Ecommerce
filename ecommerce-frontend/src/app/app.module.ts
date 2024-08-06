import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';




const routes : Routes = [
  {path:'', component:HomeComponent},
  {path:'admin/product', component: ProductListComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HeaderAdminComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
