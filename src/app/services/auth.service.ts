import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false;

    login() {
        this.isLoggedIn = true
    }

    getisLoggedInValue() {
        return this.isLoggedIn;
    }

    setIsLoggedInValue(status: boolean) {
        this.isLoggedIn = status;
    }

    logout() {
        this.isLoggedIn = false
    }
    constructor() { }
}
