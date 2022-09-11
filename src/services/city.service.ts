import { Injectable } from "@nestjs/common";
import { CreateCityDto, UpdateCityDto } from "../dtos/city.dto";

@Injectable()
export class CityService {
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new member';
  }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

}