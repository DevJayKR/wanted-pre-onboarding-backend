import { BaseEntity } from 'src/common/BaseEntity';
import { Employment } from 'src/employment/entities/employment.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @Column()
  name: string;

  @Column()
  nation: string;

  @Column()
  location: string;

  @OneToMany(() => Employment, (employment) => employment.company)
  employments: Employment[];
}
