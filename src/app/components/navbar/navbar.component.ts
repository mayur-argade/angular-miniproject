import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isLoggedIn = false;
    isHomePage = false;

    constructor(private authService: AuthService , private router: Router){
        
          
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              this.isHomePage = this.router.url === '/';
            }
          });
    }

    showLogin: boolean = false;

    showLoginModal () {
        this.showLogin = true;
    }

}
