import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { RoleService } from "../services/role.service";
import { CreateRoleDto, UpdateRoleDto } from "../dtos/role.dto";

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {
  }
  @Post()
  create(@Body() createRoleDto: CreateRoleDto){
    return this.roleService.create(createRoleDto);
  }
  @Get()
  findAll(){
    return this.roleService.findAll();
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto){
    return this.roleService.update(+id, updateRoleDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.roleService.remove(+id);
  }
}