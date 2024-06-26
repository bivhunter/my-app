import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutes } from './auth.routes';

@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
