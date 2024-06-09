import { Bill } from "src/bills/models/Bill";
import { BillType } from "src/billsType/models/BillType";
import { User } from "src/users/models/User";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "finances",
  synchronize: true, // Turn off synchronize for production
  logging: false,
  entities: [User, Bill, BillType],
  migrations: ["src/migrations/**/.ts"],
  subscribers: [],
});
