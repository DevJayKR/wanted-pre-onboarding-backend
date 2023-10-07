import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nation: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}
