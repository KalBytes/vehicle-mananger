import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { UserModule } from "./user/user.module";
import { VehicleModule } from "./vehicle/vehicle.module";
import { SearchModule } from "./search/search.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: "sqlite",
      database: ".database.sqlite3",
      autoLoadEntities: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "frontend")
    }),
    UserModule,
    VehicleModule,
    SearchModule
  ]
})
export class AppModule {}
