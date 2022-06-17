export interface Vehicle {
  id: string;
  licensePlate: string;
  vin: string;
  model: string;
  active: boolean | string;
  color: string;
  validTill: string;
}
