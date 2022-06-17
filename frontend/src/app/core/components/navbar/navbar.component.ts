import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationMenuItem } from 'src/app/types';
import { NAVIGATION_MENU_CONFIG } from 'src/app/utils/navigation-config';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public navigationItems: NavigationMenuItem[] = NAVIGATION_MENU_CONFIG;
  public subNavigationItems: NavigationMenuItem[];
  public activeMainMenuItem: NavigationMenuItem;
  public activeSubMenuItem: string;
  private routeSub: Subscription;
  constructor(
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.findNavigationItemAccordingToUrl();
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  // Find sub navigation's items if exists inside main navigation item
  private findNavigationItemAccordingToUrl(): void {
    if (this.activeRoute.snapshot.firstChild?.url[0]?.path) {
      const currentUrlMainSlug = this.activeRoute.snapshot.firstChild.url[0]
        .path;
      this.activeMainMenuItem = this.navigationItems.find(
        (item: NavigationMenuItem) => item.path === currentUrlMainSlug
      );
      this.checkIfCurrentMenuContainSubMenu();
    } else {
      this.subNavigationItems = undefined;
    }
  }

  private checkIfCurrentMenuContainSubMenu(): void {
    this.activeMainMenuItem
      ? (this.subNavigationItems = this.activeMainMenuItem.subMenu)
      : (this.subNavigationItems = undefined);
  }
}
