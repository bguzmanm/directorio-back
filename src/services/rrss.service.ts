import { Injectable } from "@nestjs/common";
import { CreateRrssDto, UpdateRrssDto } from "../dtos/rrss.dto";

@Injectable()
export class RrssService {
  create(createRrssDto: CreateRrssDto){
    return '';
  }
  findAll(){
    return '';
  }
  findOne(id: number){
    return '';
  }
  update(id: number, updateRrssDto: UpdateRrssDto){

  }
  remove(id: number){

  }
}