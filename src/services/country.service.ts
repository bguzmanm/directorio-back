import { Injectable } from '@nestjs/common';
import { CreateCountryDto, UpdateCountryDto } from "../dtos/country.dto";

@Injectable()
export class CountryService {

  create(createCountryDto: CreateCountryDto){

  }
  findAll(){

  }

  findOne(id: number){

  }
  update(id: number, updateCountryDto: UpdateCountryDto){

  }
  remove(id: number){

  }

}
