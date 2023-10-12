import { IsAlphanumeric, IsOptional, IsString, IsUUID } from 'class-validator';
import { IsNotBlank } from 'src/common/IsNotBlank.decorator';

export class SearchEmploymentDto {
  @IsString()
  @IsOptional()
  @IsNotBlank()
  @IsUUID()
  id?: string;

  @IsString()
  @IsOptional()
  @IsNotBlank()
  position?: string;

  @IsAlphanumeric()
  @IsOptional()
  @IsNotBlank()
  reward?: number;

  @IsString()
  @IsOptional()
  @IsNotBlank()
  summary?: string;

  @IsString()
  @IsOptional()
  @IsNotBlank()
  required_skill?: string;

  objectification() {
    return {
      id: this?.id,
      position: this?.position,
      reward: this?.reward,
      summary: this?.summary,
      requiredSkill: this?.required_skill,
    };
  }
}
