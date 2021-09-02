import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';

const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductListComponent},
    {path:"products/details/:id",component:ProductDetailsComponent},
    {path:"about",component:AboutComponent},
    {path:"products/new",component:AddProductComponent},
    {path:"", redirectTo:"/home",pathMatch:"full"}, // pathMatch : full = exact match
    {path:"**",component:PageNotFoundComponent} // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
