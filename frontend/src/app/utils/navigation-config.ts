import { NavigationMenuItem } from '../types';

export const NAVIGATION_MENU_CONFIG: NavigationMenuItem[] = [
  {
    label: 'Vehicles',
    path: 'vehicles',
    subMenu: [
      { label: 'Vehicles list', path: '/vehicles/all-vehicles' },
      { label: 'Add new vehicle', path: '/vehicles/add-new-vehicle' },
    ],
  },
  {
    label: 'Users',
    path: 'users',
    subMenu: [{ label: 'Users list', path: '/users/all-users' }],
  },
];
