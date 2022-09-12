import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }
  async create({ username, name, email, password, date, roles }: CreateUserDto){
    const user: User = await this.userRepository.create({username, name, email, password, date, roles});
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]>{
    return await this.userRepository.find()
  }
  async findOne(username: string): Promise<User> {
    const user: User = await this.userRepository.findOne({
      where: { username }
    });
    if (!user){
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async update(username: string, { name, email, password, date, roles }: UpdateUserDto){
    const user: User = await this.userRepository.preload({
      username, name, email, password, date, roles
    });
    if (!user){
      throw  new NotFoundException('User not found');
    }
    return user;
  }
  async remove(username: string){
    const user: User = await this.userRepository.findOne({
      where : {username}
    }) ;
    if (!user){
      throw new NotFoundException('User not found');
    }
    await this.userRepository.remove(user);
  }
}