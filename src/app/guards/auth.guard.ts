import { Inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

export function authenticationGuard(router:Router):boolean{
    const authService = Inject(AuthService)

    if(authService.isLoggedIn){
        console.log("logged in")
        return true;
    }
    else{
        // router.navigate(['/'])
        console.log("not logged in")
        return false;
    }
}