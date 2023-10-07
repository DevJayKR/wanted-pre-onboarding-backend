import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmploymentDto {
  @IsString()
  @IsNotEmpty()
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
}
