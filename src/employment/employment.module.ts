import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentController } from './employment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employment } from './entities/employment.entity';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employment]), CompanyModule],
  controllers: [EmploymentController],
  providers: [EmploymentService],
})
export class EmploymentModule {}
