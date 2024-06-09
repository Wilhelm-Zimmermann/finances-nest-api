import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BillTypeService } from "./billType.service";
import { CreateBillTypeDto } from "./dtos/CreateBillType.dto";

@Controller("billTypes")
export class BillTypesController {
  constructor(private readonly billTypeService: BillTypeService) {}

  @Post()
  async createBilType(@Body() createBillTypeDto: CreateBillTypeDto) {
    return await this.billTypeService.create(createBillTypeDto);
  }

  @Get()
  async listAllBillTypes() {
    return await this.billTypeService.listAll();
  }

  @Get(":id")
  async getOneById(@Param("id") id: string) {
    return await this.billTypeService.getOneById(id);
  }
}
