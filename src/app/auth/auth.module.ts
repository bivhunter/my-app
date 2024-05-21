import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
  exports: [AuthComponent],
})
export class AuthModule {}
