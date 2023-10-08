import { IsAlphanumeric, IsNotEmpty, IsString, IsUUID } from 'class-validator';
export class CreateEmploymentDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  company_id: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  reward: number;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsNotEmpty()
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
