import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto){

  }
  findAll(){

  }
  findOne(id: number){

  }
  update(id: number, updateUserDto: UpdateUserDto){

  }
  remove(id: number){
    
  }
}