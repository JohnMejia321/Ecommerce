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
import { ProductAddComponent } from './components/product-add/product-add.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RegistrationComponent } from './components/authetication/registration/registration.component';
import { LoginComponent } from './components/authetication/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';




const routes : Routes = [
  {path:'', component:HomeComponent},
  {path:'admin/product', component: ProductListComponent},
  {path:'admin/product/addproduct', component: ProductAddComponent},
  {path: 'admin/product/update/:id', component:ProductAddComponent },
  {path: 'admin/category', component:CategoryListComponent },
  {path: 'admin/category/add', component:CategoryAddComponent},
  {path: 'admin/category/update/:id', component:CategoryAddComponent},
  {path: 'cart/detailproduct/:id', component:DetailProductComponent},
  {path: 'cart/sumary', component: SumaryOrderComponent},
  {path: 'payment/success', component: PaymentSuccessComponent},
  {path: 'user/register', component: RegistrationComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}




];



@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HeaderAdminComponent,
    HomeComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    DetailProductComponent,
    SumaryOrderComponent,
    PaymentSuccessComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
