import { Component } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
    public signInForm: UntypedFormGroup = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });
    public token: string = '';
    public error: string = '';

    public constructor(
        private formBuilder: UntypedFormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    public signIn(): void {
        this.authService.signIn(this.signInForm.value).subscribe({
            next: (token: string) => {
                this.token = token;
            },
            error: (error: Error) => {
                this.error = `Error: ${error.name} ${error.message}`;
            },
        });
    }

    public signUp(): void {
        this.router.navigateByUrl('auth/sign-up');
    }
}
