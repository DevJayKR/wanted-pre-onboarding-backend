import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './configs/validationSchema';
import { DatabaseModule } from './database/database.module';
import { EmploymentModule } from './employment/employment.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema,
    }),
    DatabaseModule,
    EmploymentModule,
    UserModule,
    CompanyModule,
  ],
  providers: [AppService],
})
export class AppModule {}
