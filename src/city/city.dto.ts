import { PartialType } from "@nestjs/mapped-types";

export class CreateCityDto {}
export class UpdateCityDto extends PartialType(CreateCityDto){}