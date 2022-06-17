import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRouting } from './vehicles-routing';
import { VehiclesPageComponent, NewVehiclePageComponent } from './pages';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRouting,
    SharedModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  declarations: [VehiclesPageComponent, NewVehiclePageComponent],
  exports: [VehiclesPageComponent, NewVehiclePageComponent],
  providers: [],
})
export class VehiclesModule {}
