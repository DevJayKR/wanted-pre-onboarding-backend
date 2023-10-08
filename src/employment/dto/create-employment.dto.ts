import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';
import { IsNotBlank } from 'src/common/IsNotBlank.decorator';

export class CreateEmploymentDto {
  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  company_id: string;

  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  position: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @IsNotBlank()
  reward: number;

  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  summary: string;

  @IsString()
  @IsNotEmpty()
  @IsNotBlank()
  required_skill: string;

  objectification() {
    return {
      company_id: this.company_id,
      position: this.position,
      reward: this.reward,
      summary: this.summary,
      requiredSkill: this.required_skill,
    };
  }
}
