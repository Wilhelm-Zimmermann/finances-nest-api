import { BillType } from "src/billsType/models/BillType";
import { BaseEntity } from "src/shared/models/BaseEntity";
import { User } from "src/users/models/User";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: "bills" })
export class Bill extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  paid: true;

  @Column()
  paidDate: Date;

  @ManyToOne(() => BillType, (billType) => billType.bills)
  billType: BillType;

  @ManyToOne(() => User, (user) => user.bills)
  user: User;
}
