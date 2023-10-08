import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const newUser = this.userRepository.create(dto);

    await this.userRepository.save(newUser);

    return newUser;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(options: FindOptionsWhere<User>) {
    const user = await this.userRepository.findOneBy(options);
    if (user) return user;

    throw new BadRequestException('잘못된 사용자 ID 입니다.');
  }

  async remove(options: FindOptionsWhere<User>) {
    const user = await this.findOne(options);
    await this.userRepository.remove(user);
    return user;
  }
}
