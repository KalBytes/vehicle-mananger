import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';
import { Vehicle } from 'src/app/vehicles/types';

export interface VehicleState
  extends EntityState<Vehicle, string>,
    ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'vehicle-store' })
export class VehicleStore extends EntityStore<VehicleState> {
  constructor() {
    super({});
  }
}
