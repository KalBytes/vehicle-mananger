import { Component, Input } from '@angular/core';
import { NavigationMenuItem } from 'src/app/types';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss'],
})
export class SubNavbarComponent {
  @Input() subNavigationItems: NavigationMenuItem;
  constructor() {}
}
