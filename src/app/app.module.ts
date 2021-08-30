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
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './components/home-area/sales/sales.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { CalcService } from './services/calc.service';

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
        PricingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [],
    //providers: [CalcService],//Create calcServies Object for the entire application. Cause is it's in app.moudle.
    bootstrap: [LayoutComponent]
})
export class AppModule { }
