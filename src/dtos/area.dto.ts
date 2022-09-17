import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAreaDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  name: string;
}

export class UpdateAreaDto extends PartialType(CreateAreaDto){}