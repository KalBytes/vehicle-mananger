import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { Vehicle } from "./vehicle";
import { VehicleService } from "./vehicle.service";
import { VehicleDTO } from "./vehicle.dto";

@Controller("vehicles")
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  public async getVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async addVehicles(@Body() vehicle: VehicleDTO) {
    return this.vehicleService.addNewVehicle(vehicle as Vehicle);
  }
}
