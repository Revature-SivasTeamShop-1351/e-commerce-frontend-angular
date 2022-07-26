import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DisplayProductsComponent },
  { path: "cart", component: CartComponent },
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: DisplayProductsComponent},
  {path: 'category/:id', component: DisplayProductsComponent},
  {path: 'category', component: DisplayProductsComponent},
  {path: 'products', component: DisplayProductsComponent},
  { path: "checkout", component: CheckoutComponent },
  { path: "profile", component: ProfileComponent},
  { path: "profile/:id", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
