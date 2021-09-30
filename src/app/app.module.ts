import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { BuyNowComponent } from './components/home-area/buy-now/buy-now.component';
import { OrderComponent } from './components/home-area/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesComponent } from './components/home-area/sales/sales.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { CalcService } from './services/calc.service';
import { ColorComponent } from './components/home-area/color/color.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component'
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        DiscountComponent,
        BuyNowComponent,
        OrderComponent,
        SalesComponent,
        LocationComponent,
        SloganComponent,
        ClockComponent,
        TipComponent,
        PricingComponent,
        ColorComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        AddProductComponent,
        UpdateProductComponent,
        RegisterComponent,
        LoginComponent,
        LogoutComponent,
        AuthMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [],
    //providers: [CalcService],//Create calcServies Object for the entire application. Cause is it's in app.moudle.
    // Register the interceptor so any request will invoke it: 
    providers: [{ 
        provide: HTTP_INTERCEPTORS, // Register the interceptor
        useClass: AuthInterceptor, // Our interceptor class
        multi: true // Can register it several times if needed
    }],

    bootstrap: [LayoutComponent]
})
export class AppModule { }
