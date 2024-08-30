import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddressComponent } from './components/address/address.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { authenticationGuard } from './guards/auth.guard';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [

    {
        path: '',
        component: HomepageComponent
    },

    {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [authenticationGuard]
    },

    {
        path: 'menu',
        component: MenuComponent,
        // canActivate: [authenticationGuard]
    },

    {
        path: 'aboutus',
        component: AboutusComponent,
        // canActivate: [authenticationGuard]
    },

    {
        path: 'contactus',
        component: ContactusComponent,
        // canActivate: [authenticationGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
