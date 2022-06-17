import { CardData } from './components/types';

export const CARDS_DATA: CardData[] = [
  {
    title: 'Manage Vehicles',
    iconSrc: './../../assets/free-car-icon.png',
    altText: 'car-icon',
    contentText:
      'Here you can see a list of all the existing vehicles and add new vehicles',
    buttonText: 'GO',
    path: 'vehicles',
  },
  {
    title: 'Manage Users',
    iconSrc: './../../assets/users-free.png',
    altText: 'users-icon',
    contentText: 'Here you can see all users, and search for users',
    buttonText: 'GO',
    path: 'users',
  },
];
