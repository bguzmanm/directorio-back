import { Injectable } from '@nestjs/common';
import { CreateAreaDto, UpdateAreaDto } from "../dtos/area.dto";

@Injectable()
export class AreaService {

  create(createAraDto: CreateAreaDto){
    return '';
  }
  findAll(){

  }
  findOne(id: number){

  }
  update(id: number, updateAreaDto: UpdateAreaDto){
    return '';
  }
  remove(id: number){

  }

}
