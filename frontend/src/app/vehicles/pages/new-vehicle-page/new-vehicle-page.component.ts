import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Vehicle } from '../../types';
import { VehiclesService } from 'src/app/state/vehicles-state/vehicles-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-vehicle-page',
  templateUrl: './new-vehicle-page.component.html',
  styleUrls: ['./new-vehicle-page.component.scss'],
})
export class NewVehiclePageComponent implements OnInit {
  public vehicleForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly vehicleService: VehiclesService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.vehicleForm = this.fb.group({
      licensePlate: new FormControl('', Validators.required),
      vin: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      active: new FormControl('', Validators.required),
      validTill: new FormControl('', Validators.required),
    });
  }

  public onForumSubmit(): void {
    if (this.vehicleForm.invalid) {
      return;
    }
    const newVehicle: Vehicle = this.vehicleForm.value;
    this.vehicleService.addNewVehicle(newVehicle).subscribe(
      () => {
        this.vehicleForm.reset();
        this.showSnackBar('Vehicle added successfully');
      },
      () =>
        // Work around, in real case scenario we will show the message from the backend
        // and there will be a global error interceptor :)
        this.showSnackBar('oops:( probably the valid till is not in the future')
    );
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2500,
    });
  }
}
