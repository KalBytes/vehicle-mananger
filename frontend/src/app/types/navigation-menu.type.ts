export interface NavigationMenuItem {
  label: string;
  path: string;
  subMenu?: NavigationMenuItem[];
}
