import { TableColumn } from '../shared';

export const USER_DISPLAY_COLUMNS: TableColumn[] = [
  { label: 'First name', columnName: 'firstName' },
  { label: 'Last name', columnName: 'lastName' },
  { label: 'Model', columnName: 'email' },
  { label: 'Birthday', columnName: 'birthday', dateField: true },
];
