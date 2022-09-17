import { PartialType } from "@nestjs/mapped-types";

export class CreateCountryDto {}
export class UpdateCountryDto extends PartialType(CreateCountryDto){}