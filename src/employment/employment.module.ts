import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentController } from './employment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employment } from './entities/employment.entity';
import { CompanyModule } from 'src/company/company.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employment]), CompanyModule, UserModule],
  controllers: [EmploymentController],
  providers: [EmploymentService],
  exports: [EmploymentService],
})
export class EmploymentModule {}
