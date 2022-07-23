import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductModule } from './admin/product/product.module';
import { HomeComponent } from './admin/home/home.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './admin/edit/edit.component';
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DisplayProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "admin", component: HomeComponent },
  { path: "admin/edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
             ProductModule,
            FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
