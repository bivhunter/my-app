import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const authRoutes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'sign-in'
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
            {
                path: 'sign-in',
                component: SignInComponent,
            },
        ],
    }
];
