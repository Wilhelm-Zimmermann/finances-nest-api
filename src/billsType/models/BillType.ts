import { Bill } from "src/bills/models/Bill";
import { BaseEntity } from "src/shared/models/BaseEntity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "billtypes" })
export class BillType extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Bill, (bill) => bill.billType)
  bills: Bill[];
}
