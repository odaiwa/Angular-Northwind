import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { IncompleteGuard } from './services/incomplete.guard';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  //when we want to use lazy loading we use loadChildren with arrow function Promise
  //only when user routes to supplier get the entire "SupplierModule from server"
  { path: "suppliers", loadChildren: () => import('./components/suppliers-area/suppliers.module').then(m => m.SuppliersModule) },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", canActivate: [AuthGuard], component: LogoutComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/details/:id", component: ProductDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "contact-us", component: ContactUsComponent },

  { path: "products/new", canActivate: [AuthGuard], canDeactivate: [IncompleteGuard], component: AddProductComponent },
  { path: "products/edit/:id", canActivate: [AuthGuard], component: UpdateProductComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch : full = exact match
  { path: "**", component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
