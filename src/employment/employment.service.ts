import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmploymentDto } from './dto/create-employment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employment } from './entities/employment.entity';
import { FindOptionsWhere, Like, MoreThan, Repository } from 'typeorm';
import { CompanyService } from 'src/company/company.service';
import { UpdateEmploymentDto } from './dto/update-employment.dto';
import { SearchEmploymentDto } from './dto/search-employment.dto';
import { UserService } from 'src/user/user.service';
import { ApplicationEmploymentDto } from './dto/application-employment.dto';

@Injectable()
export class EmploymentService {
  constructor(
    @InjectRepository(Employment)
    private employmentRepository: Repository<Employment>,
    private readonly companyService: CompanyService,
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateEmploymentDto) {
    const company = await this.companyService.findOne({ id: dto.company_id });

    const newEmployment = this.employmentRepository.create({
      company,
      ...dto.objectification(),
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
      where: {
        id: options.id,
        company: { employments: true },
      },
      relations: {
        company: { employments: true },
      },
    });

    if (employment) {
      const selfIndex = employment.company.employments.findIndex(
        (employment) => employment.id == options.id,
      );

      employment.company.employments.splice(selfIndex, selfIndex + 1);

      return employment;
    }

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

  async search(dto: SearchEmploymentDto) {
    const query = dto.objectification();

    const employments = await this.employmentRepository.find({
      select: {
        id: true,
        position: true,
        reward: true,
        summary: true,
        requiredSkill: true,
        company: {
          name: true,
          nation: true,
          location: true,
        },
        createdAt: true,
        updatedAt: true,
      },
      where: {
        position: query.position ? Like(`%${query.position}%`) : undefined,
        reward: query.reward ? MoreThan(query.reward) : undefined,
        requiredSkill: query.requiredSkill
          ? Like(`%${query.requiredSkill}%`)
          : undefined,
        id: query.id ? query.id : undefined,
        summary: query.summary ? Like(`%${query.summary}%`) : undefined,
      },
      relations: {
        company: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });

    if (employments.length > 0) return employments;

    throw new NotFoundException('해당 조건의 채용 공고가 존재하지 않습니다.');
  }

  async application(dto: ApplicationEmploymentDto) {
    const { employmentId, userId } = dto.objectification();

    const employment = await this.employmentRepository.findOne({
      where: { id: employmentId },
      relations: {
        applicants: true,
      },
    });

    if (employment) {
      const user = await this.userService.findOne({ id: userId });

      for (const applicant of employment.applicants) {
        if (applicant.id == user.id) {
          throw new BadRequestException('이미 지원한 채용 공고입니다.');
        } else {
          employment.applicants.push(user);

          await this.employmentRepository.save(employment);

          employment.applicants = [];
          employment.applicants.push(user);

          return employment;
        }
      }
    }

    throw new BadRequestException('잘못된 채용 공고 ID 입니다.');
  }

  async findApplicants(id: string) {
    return await this.employmentRepository.findOne({
      where: { id },
      relations: {
        applicants: true,
      },
    });
  }
}
