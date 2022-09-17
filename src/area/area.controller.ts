import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AreaService } from "./area.service";
import { CreateAreaDto, UpdateAreaDto } from "./area.dto";
import { Area } from "./area.entity";

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() createAreaDto: CreateAreaDto): Promise<Area>{
    return this.areaService.create(createAreaDto);
  }
  @Get()
  findAll(): Promise<Area[]>{
    return this.areaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Area>{
    return this.areaService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto): Promise<Area>{
    return this.areaService.update(+id, updateAreaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void>{
    return this.areaService.remove(+id);
  }

}
