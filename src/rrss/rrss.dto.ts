import { PartialType } from "@nestjs/mapped-types";

export class CreateRrssDto {}
export class UpdateRrssDto extends PartialType(CreateRrssDto){}