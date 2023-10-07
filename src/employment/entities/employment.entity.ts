import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/common/BaseEntity';
import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
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
}
