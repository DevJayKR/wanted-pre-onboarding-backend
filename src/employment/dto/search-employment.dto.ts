import { IsAlphanumeric, IsOptional, IsString } from 'class-validator';
import { IsNotBlank } from 'src/common/IsNotBlank.decorator';

const IsNotBlankValidateOptions = {
  message: '$property must not be an empty string.',
};

export class SearchEmploymentDto {
  @IsString()
  @IsOptional()
  @IsNotBlank('', IsNotBlankValidateOptions)
  id: string;

  @IsString()
  @IsOptional()
  @IsNotBlank('', IsNotBlankValidateOptions)
  position?: string;

  @IsAlphanumeric()
  @IsOptional()
  @IsNotBlank('', IsNotBlankValidateOptions)
  reward?: number;

  @IsString()
  @IsOptional()
  @IsNotBlank('', IsNotBlankValidateOptions)
  summary?: string;

  @IsString()
  @IsOptional()
  @IsNotBlank('', IsNotBlankValidateOptions)
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
