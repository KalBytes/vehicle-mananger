import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/vehicles';
import { QueryEntity } from '@datorama/akita';
import { VehicleState, VehicleStore } from './vehicles-store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VehiclesQuery extends QueryEntity<VehicleState> {
  constructor(protected store: VehicleStore) {
    super(store);
  }
  // Converts booleans to 'yes | no' + generates friendly date
  selectVehiclesForListPage(): Observable<Vehicle[]> {
    return this.selectAll().pipe(
      map((vehicles: Vehicle[]) => {
        return vehicles.map((vehicle: Vehicle) => {
          return {
            ...vehicle,
            active: vehicle.active ? 'yes' : 'no',
          };
        });
      })
    );
  }
}
