import { Injectable } from '@nestjs/common';
import { CreateEmploymentDto } from './dto/create-employment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employment } from './entities/employment.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class EmploymentService {
  constructor(
    @InjectRepository(Employment)
    private employmentRepository: Repository<Employment>,
    private readonly companyService: CompanyService,
  ) {}

  async create(dto: CreateEmploymentDto) {
    const company = await this.companyService.findOne({ id: dto.company_id });

    const newEmployment = this.employmentRepository.create({
      company,
      ...dto,
    });

    await this.employmentRepository.save(newEmployment);
    return newEmployment;
  }

  async findAll() {
    return await this.employmentRepository.find({
      select: {
        id: true,
        position: true,
        reward: true,
        requiredSkill: true,
        company: {
          name: true,
          nation: true,
          location: true,
        },
      },
      relations: { company: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(options: FindOptionsWhere<Employment>) {
    return await this.employmentRepository.findOneBy(options);
  }

  async remove(options: FindOptionsWhere<Employment>) {
    const employment = await this.findOne(options);
    await this.employmentRepository.remove(employment);
    return employment;
  }
}
