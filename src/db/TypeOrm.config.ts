import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { AppDataSource } from "./DataSource.config";

export const TypeOrmConfig: TypeOrmModuleOptions = AppDataSource.options;
