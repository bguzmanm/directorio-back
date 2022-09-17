import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AreaService } from "../services/area.service";
import { CreateAreaDto, UpdateAreaDto } from "../dtos";

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() createAreaDto: CreateAreaDto){
    return this.areaService.create(createAreaDto);
  }

  @Get()
  findAll(){
    return this.areaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string){
    return this.areaService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto){
    return this.areaService.update(+id, updateAreaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.areaService.remove(+id);
  }

}
