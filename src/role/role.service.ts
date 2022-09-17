import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./role.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>
  ) {
  }
  async create({id, name}: CreateRoleDto){
    const role : Role = await this.roleRepository.create({id, name});
    return await this.roleRepository.save(role);
  }
  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role>{
    const role : Role = await this.roleRepository.findOne({
      where: { id }
    });
    if (!role){
      throw new NotFoundException('Role not found');
    }
    return role;
  }
  async update(id: number, { name }: UpdateRoleDto){
    const role: Role = await this.roleRepository.preload({ id, name });
    if (!role){
      throw new NotFoundException('Role not found');
    }
    return role;
  }
  async remove(id: number){
    const role: Role = await this.roleRepository.findOne({
      where: {id}
    });
    if (!role){
      throw new NotFoundException('Role not found');
    }
    return await this.roleRepository.remove(role);
  }

}