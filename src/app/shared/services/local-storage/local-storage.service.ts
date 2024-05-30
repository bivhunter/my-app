import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public getLastRoute(): string | null {
		return localStorage.getItem('lastRoute');
	}

	public setLastRoute(route: string): void {
		localStorage.setItem('lastRoute', route);
	}
}
