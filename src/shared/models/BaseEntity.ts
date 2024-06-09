import {
  CreateDateColumn,
  PrimaryColumn,
  BaseEntity as TypeOrmBaseEntity,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

export class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryColumn({ default: uuidv4() })
  id: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
