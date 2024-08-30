import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    @Output() loginSuccess = new EventEmitter<boolean>();

    signupForm: FormGroup;
    isLoggedIn: any;

    constructor(private authservice: AuthService) {
        this.signupForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            termsAndCondition: new FormControl(false, [Validators.requiredTrue]) // Use Validators.requiredTrue for checkboxes
        });
    }

    setHideModal() {
        this.loginSuccess.emit(false);
    }

    onLogin() {
        // if (this.signupForm.valid) {
        // Call your login API here and upon success:
        this.authservice.login()
        this.loginSuccess.emit(false);
        //   }
    }
}
