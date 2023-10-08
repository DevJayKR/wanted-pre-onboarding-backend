import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { CreateEmploymentDto } from './dto/create-employment.dto';
import { UpdateEmploymentDto } from './dto/update-employment.dto';
import { SearchEmploymentDto } from './dto/search-employment.dto';

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

  @Get('search')
  seach(@Query() dto: SearchEmploymentDto) {
    return this.employmentService.search(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employmentService.findOne({ id });
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employmentService.remove({ id });
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateEmploymentDto,
  ) {
    return this.employmentService.update(id, dto);
  }
}
