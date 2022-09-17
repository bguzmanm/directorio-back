import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CityService } from "./city.service";
import { CreateCityDto, UpdateCityDto } from "./city.dto";

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {
  }

  @Post()
  create(@Body() createCityDto: CreateCityDto){
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll(){
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto ){
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
