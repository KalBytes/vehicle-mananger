import { IsNotEmpty, IsBoolean, IsDate } from "class-validator";
import { SimpleFeatureDateValidator } from "./date-validator";

interface Vehicle {
  id?: string;
  licensePlate: string;
  vin: string;
  model: string;
  active: boolean;
  color: string;
  validTill: Date;
}

export class VehicleDTO implements Vehicle {
  @IsNotEmpty({ message: "licensePlate is required" })
  licensePlate: string;
  @IsNotEmpty({ message: "vin is required" })
  vin: string;
  @IsNotEmpty({ message: "model is required" })
  model: string;
  @IsNotEmpty({ message: "is active is required" })
  @IsBoolean({ message: "active must be of type boolean" })
  active: boolean;
  @IsNotEmpty({ message: "Color is required" })
  color: string;
  @IsNotEmpty({ message: "vin is required" })
  @SimpleFeatureDateValidator({ message: "validTill must be in the future" })
  validTill: Date;
}
