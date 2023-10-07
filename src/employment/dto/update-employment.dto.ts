import { OmitType } from '@nestjs/mapped-types';
import { CreateEmploymentDto } from './create-employment.dto';

export class UpdateEmploymentDto extends OmitType(CreateEmploymentDto, [
  'company_id',
] as const) {}
