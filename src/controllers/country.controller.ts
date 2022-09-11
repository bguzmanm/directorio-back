import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CountryService } from "../services/country.service";
import { CreateCountryDto, UpdateCountryDto } from "../dtos/country.dto";

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {
  }

  @Post()
  create(@Body() createCountryDto: CreateCountryDto){
    return this.countryService.create(createCountryDto);
  }

  @Get()
  findAll(){
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.countryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto ){
    return this.countryService.update(+id, updateCountryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }


}
