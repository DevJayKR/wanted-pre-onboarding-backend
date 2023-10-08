import { BaseEntity } from 'src/common/BaseEntity';
import { Employment } from 'src/employment/entities/employment.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => Employment, (employment) => employment.applicants)
  applications: Employment[];
}
