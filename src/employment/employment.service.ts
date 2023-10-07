import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmploymentDto } from './dto/create-employment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employment } from './entities/employment.entity';
import { FindOptionsWhere, Not, Repository } from 'typeorm';
import { CompanyService } from 'src/company/company.service';
import { UpdateEmploymentDto } from './dto/update-employment.dto';

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
      position: dto.position,
      requiredSkill: dto.required_skill,
      reward: dto.reward,
      summary: dto.summary,
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
    const employment = await this.employmentRepository.findOne({
      select: {
        id: true,
        position: true,
        reward: true,
        requiredSkill: true,
        summary: true,
        company: {
          name: true,
          nation: true,
          location: true,
          employments: {
            id: true,
          },
        },
      },
      where: options.id
        ? { id: options.id, company: { employments: { id: Not(options.id) } } }
        : options,
      relations: {
        company: { employments: true },
      },
    });

    if (employment) return employment;

    throw new BadRequestException('잘못된 채용 공고 ID 입니다.');
  }

  async remove(options: FindOptionsWhere<Employment>) {
    const employment = await this.findOne(options);
    await this.employmentRepository.remove(employment);
    return employment;
  }

  async update(id: string, dto: UpdateEmploymentDto) {
    await this.employmentRepository.update(id, {
      requiredSkill: dto.required_skill,
      position: dto.position,
      reward: dto.reward,
      summary: dto.summary,
    });

    return await this.findOne({ id });
  }
}
