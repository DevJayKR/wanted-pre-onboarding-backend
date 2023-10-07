import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { CreateEmploymentDto } from './dto/create-employment.dto';

@Controller('employment')
export class EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  @Post()
  create(@Body() dto: CreateEmploymentDto) {
    return this.employmentService.create(dto);
  }

  @Get()
  findAll() {
    return this.employmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employmentService.findOne({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employmentService.remove({ id });
  }
}
