import { Injectable } from "@nestjs/common";
import { CreateBillTypeDto } from "./dtos/CreateBillType.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { BillType } from "./models/BillType";
import { Repository } from "typeorm";

@Injectable()
export class BillTypeService {
  constructor(
    @InjectRepository(BillType)
    private readonly billTypeRepository: Repository<BillType>,
  ) {}

  async create(createBillTypeDto: CreateBillTypeDto) {
    const billType = new BillType();
    billType.name = createBillTypeDto.name;
    return await this.billTypeRepository.save(billType);
  }

  async listAll() {
    return await this.billTypeRepository.find();
  }

  async getOneById(id: string) {
    return await this.billTypeRepository.findOne({
      where: {
        id,
      },
    });
  }
}
