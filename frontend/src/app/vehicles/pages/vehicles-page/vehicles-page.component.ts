import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared';
import { VEHICLE_DISPLAY_COLUMNS } from '../../constant';
import { VehiclesService } from 'src/app/state/vehicles-state/vehicles-service';
import { Observable } from 'rxjs';
import { VehiclesQuery } from 'src/app/state/vehicles-state/vehicles-query';
import { Vehicle } from '../../types';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.scss'],
})
export class VehiclesPageComponent implements OnInit {
  public vehiclesTableColumns: TableColumn[] = VEHICLE_DISPLAY_COLUMNS;
  public vehicleList$: Observable<Vehicle[]>;
  constructor(
    private readonly vehicleService: VehiclesService,
    private readonly vehicleQuery: VehiclesQuery
  ) {}

  ngOnInit() {
    this.vehicleService.getAllVehicles();
    this.vehicleList$ = this.vehicleQuery.selectVehiclesForListPage();
  }
}
