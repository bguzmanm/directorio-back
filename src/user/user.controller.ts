import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }
  @Get()
  findAll(){
    return this.userService.findAll();
  }
  @Patch(':username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto){
    return this.userService.update(username, updateUserDto);
  }
  @Delete(':username')
  remove(@Param('username') username: string){
    return this.userService.remove(username);
  }
}