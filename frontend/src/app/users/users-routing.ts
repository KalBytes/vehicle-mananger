import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent, SingleUserPageComponent } from './pages';
const VehicleRoute: Routes = [
  {
    path: '',
    redirectTo: 'all-users',
    pathMatch: 'full',
  },
  {
    path: 'all-users',
    component: UsersPageComponent,
  },
  {
    path: ':id',
    component: SingleUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(VehicleRoute)],
})
export class UsersRoutingModule {}
