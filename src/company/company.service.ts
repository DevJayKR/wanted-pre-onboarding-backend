import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(dto: CreateCompanyDto) {
    await this.ifExistThrow({ name: dto.name }, '이미 존재하는 회사명입니다.');

    const newCompany = this.companyRepository.create(dto);
    await this.companyRepository.save(newCompany);
    return newCompany;
  }

  async ifExistThrow(options: FindOptionsWhere<Company>, message?: string) {
    const result = await this.companyRepository.exist({ where: options });
    if (result) throw new ConflictException(message);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(options: FindOptionsWhere<Company>) {
    const company = await this.companyRepository.findOneBy(options);

    if (company) return company;

    throw new BadRequestException('잘못된 회사 식별자 입니다.');
  }

  async remove(id: string) {
    const company = await this.findOne({ id });
    if (company) {
      await this.companyRepository.remove(company);
      return company;
    }

    throw new BadRequestException('잘못된 회사 식별자 입니다.');
  }
}
