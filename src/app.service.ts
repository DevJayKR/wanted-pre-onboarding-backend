import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EmploymentService } from './employment/employment.service';
import { UserService } from './user/user.service';
import { CompanyService } from './company/company.service';
import { CreateEmploymentDto } from './employment/dto/create-employment.dto';
import { CreateUserDto } from './user/dto/create-user.dto';

@Injectable()
export class AppService implements OnModuleInit {
  private logger = new Logger('App Service');

  constructor(
    private readonly employmentService: EmploymentService,
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
  ) {}

  async onModuleInit() {
    await this.companyInitialize();
    await this.employmentInitialize();
    await this.userInitialize();

    this.logger.log(`회사, 채용 공고, 유저 초기화 완료.`);
  }

  async companyInitialize() {
    const companies = await this.companyService.findAll();

    for (const company of companies) {
      if (company.name == '네이버' || company.name == '카카오')
        await this.companyService.remove(company.id);
    }

    await this.companyService.create({
      location: '서울',
      name: '네이버',
      nation: '한국',
    });

    await this.companyService.create({
      location: '판교',
      name: '카카오',
      nation: '한국',
    });
  }

  async employmentInitialize() {
    const kakao = await this.companyService.findOne({
      name: '카카오',
    });

    const naver = await this.companyService.findOne({
      name: '네이버',
    });

    const kakaoEmployment: CreateEmploymentDto = {
      company_id: kakao.id,
      position: '주니어 백엔드 개발자',
      required_skill: 'Javascript',
      reward: 100000,
      summary: '카카오에서 주니어 백엔드 개발자를 모집합니다.',
      objectification() {
        return {
          company_id: this.company_id,
          position: this.position,
          reward: this.reward,
          summary: this.summary,
          requiredSkill: this.required_skill,
        };
      },
    };

    const naverEmployment: CreateEmploymentDto = {
      company_id: naver.id,
      position: '주니어 프론트엔드 개발자',
      required_skill: 'Typescript',
      reward: 200000,
      summary: '네이버에서 주니어 프론트엔드 개발자를 모집합니다.',
      objectification() {
        return {
          company_id: this.company_id,
          position: this.position,
          reward: this.reward,
          summary: this.summary,
          requiredSkill: this.required_skill,
        };
      },
    };

    await this.employmentService.create(kakaoEmployment);
    await this.employmentService.create(naverEmployment);
  }

  async userInitialize() {
    const names = ['홍길동', '아무개'];

    const users = await this.userService.findAll();

    for (const user of users) {
      if (user.name == names[0] || user.name == names[1])
        await this.userService.remove({ id: user.id });
    }

    const user1: CreateUserDto = {
      name: names[0],
    };

    const user2: CreateUserDto = {
      name: names[1],
    };

    await this.userService.create(user1);
    await this.userService.create(user2);
  }
}
