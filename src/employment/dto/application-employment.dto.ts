import { IsString, IsUUID } from 'class-validator';

export class ApplicationEmploymentDto {
  @IsString()
  @IsUUID()
  employment_id: string;

  @IsString()
  @IsUUID()
  user_id: string;

  objectification() {
    return {
      employmentId: this.employment_id,
      userId: this.user_id,
    };
  }
}
