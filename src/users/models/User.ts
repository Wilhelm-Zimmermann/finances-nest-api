import { Bill } from "src/bills/models/Bill";
import { BaseEntity } from "src/shared/models/BaseEntity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Bill, (bill) => bill.user)
  bills: Bill[];
}
