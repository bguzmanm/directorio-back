import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToolTypeService } from './tool-type.service';
import { UpdateToolTypeDto, CreateToolTypeDto } from "./tool-type.dto";

@Controller('tool-type')
export class ToolTypeController {
  constructor(private readonly toolTypeService: ToolTypeService) {}

  @Post()
  create(@Body() createToolTypeDto: CreateToolTypeDto) {
    return this.toolTypeService.create(createToolTypeDto);
  }

  @Get()
  findAll() {
    return this.toolTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolTypeDto: UpdateToolTypeDto) {
    return this.toolTypeService.update(+id, updateToolTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolTypeService.remove(+id);
  }
}
