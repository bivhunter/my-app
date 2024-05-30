import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';

import { LocalStorageService } from './shared/services/local-storage/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'my-app';

    private subscription: Subscription = new Subscription();

    public constructor(
        private router: Router,
        private localStorageService: LocalStorageService,
    ) {}

    public ngOnInit(): void {
        this.subscribeRouterEvents();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // need for github hosting to avoid 404 after page reload
    private subscribeRouterEvents(): void {
        this.subscription.add(this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/') {
                    const lastRoute: string | null = this.localStorageService.getLastRoute();
                    if (lastRoute) {
                        this.router.navigateByUrl(lastRoute);
                    }
                }
                
                this.localStorageService.setLastRoute(event.url);
            }
        }));
    }
}
