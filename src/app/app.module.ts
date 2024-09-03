import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { HeroSectionComponent } from './components/homepage/hero-section/hero-section.component';
import { BestFoodsForYouComponent } from './components/homepage/best-foods-for-you/best-foods-for-you.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddressComponent } from './components/address/address.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HomeAd1Component } from './components/homepage/home-ad1/home-ad1.component';
import { Advertisement1Component } from './components/homepage/advertisement1/advertisement1.component';
import { Card1Component } from './components/cards/card1/card1.component';
import { Advertisement2Component } from './components/homepage/advertisement2/advertisement2.component';
import { TrendingItemsComponent } from './components/homepage/trending-items/trending-items.component';
import { TrendingItems2Component } from './components/homepage/trending-items2/trending-items2.component';
import { BlogComponent } from './components/homepage/blog/blog.component';
import { Card2Component } from './components/cards/card2/card2.component';
import { BlogCardComponent } from './components/cards/blog-card/blog-card.component';
import { AuthService } from './services/auth.service';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { MenuComponent } from './pages/menu/menu.component';
import {provideHttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    BestFoodsForYouComponent,
    HomepageComponent,
    LoginComponent,
    ProfileComponent,
    AccountSettingsComponent,
    OrderDetailsComponent,
    AddressComponent,
    NotificationsComponent,
    HomeAd1Component,
    Advertisement1Component,
    Card1Component,
    Advertisement2Component,
    TrendingItemsComponent,
    TrendingItems2Component,
    BlogComponent,
    Card2Component,
    BlogCardComponent,
    AboutusComponent,
    ContactusComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule 
  ],
  providers: [AuthService,  provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
