import { Module } from "@nestjs/common";
import { BillTypesController } from "./billType.controller";
import { BillTypeService } from "./billType.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillType } from "./models/BillType";

@Module({
  imports: [TypeOrmModule.forFeature([BillType])],
  controllers: [BillTypesController],
  providers: [BillTypeService],
})
export class BillTypeModule {}
