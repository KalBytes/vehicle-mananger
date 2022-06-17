import { TableColumn } from 'src/app/shared';

export const VEHICLE_DISPLAY_COLUMNS: TableColumn[] = [
  { label: 'License plate', columnName: 'licensePlate' },
  { label: 'vin number', columnName: 'vin' },
  { label: 'Model', columnName: 'model' },
  { label: 'Color', columnName: 'color' },
  { label: 'Valid till', columnName: 'validTill', dateField: true },
];
