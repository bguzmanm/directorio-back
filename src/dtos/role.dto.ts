import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRoleDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsString()
  name: string;
}
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}