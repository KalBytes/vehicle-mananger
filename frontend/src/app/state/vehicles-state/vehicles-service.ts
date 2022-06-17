import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/vehicles';
import { environment } from 'src/environments/environment';
import { VehicleStore } from './vehicles-store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  constructor(
    private readonly http: HttpClient,
    private readonly vehiclesStore: VehicleStore
  ) {}

  public getAllVehicles(): void {
    this.http
      .get(environment.vehiclesUrl)
      .subscribe((v: Vehicle[]) => this.vehiclesStore.set(v));
  }

  public addNewVehicle(addNewVehicleData: Vehicle): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(environment.vehiclesUrl, addNewVehicleData)
      .pipe(tap((v: Vehicle) => this.vehiclesStore.add(v)));
  }
}
