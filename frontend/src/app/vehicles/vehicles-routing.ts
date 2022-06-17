import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesPageComponent, NewVehiclePageComponent } from './pages';
const VehicleRoute: Routes = [
  {
    path: '',
    redirectTo: 'all-vehicles',
    pathMatch: 'full',
  },
  {
    path: 'all-vehicles',
    component: VehiclesPageComponent,
  },
  {
    path: 'add-new-vehicle',
    component: NewVehiclePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(VehicleRoute)],
})
export class VehiclesRouting {}
