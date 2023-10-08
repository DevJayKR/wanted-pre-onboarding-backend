import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/common/BaseEntity';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'employments' })
export class Employment extends BaseEntity {
  @Column()
  position: string;

  @Column()
  reward: number;

  @Column()
  summary: string;

  @Column({ name: 'required_skill' })
  @Expose({ name: 'required_skill' })
  requiredSkill: string;

  @ManyToOne(() => Company, (company) => company.employments, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToMany(() => User, (user) => user.applications, {
    cascade: true,
  })
  @JoinTable({ name: 'employment_applicants_user' })
  applicants: User[];
}
