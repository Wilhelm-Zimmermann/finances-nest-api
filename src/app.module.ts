import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmConfig } from "./db/TypeOrm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillType } from "./billsType/models/BillType";
import { Bill } from "./bills/models/Bill";
import { User } from "./users/models/User";
import { BillTypeModule } from "./billsType/billType.module";
import { LogMiddleware } from "./shared/middlewares/LogMiddleware";
import { UserModule } from "./users/user.module";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([User, Bill, BillType]),
    BillTypeModule,
    UserModule,
    AuthModule,
    BillsModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes("*");
  }
}
