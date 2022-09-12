import { PartialType } from "@nestjs/mapped-types";
import { CreateRoleDto } from "./role.dto";
import { IsArray, IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsDate()
  date: Date;
  @IsArray()
  roles?: CreateRoleDto[];

}
export class UpdateUserDto extends PartialType(CreateUserDto){}