import { PartialType } from "@nestjs/mapped-types";

export class CreateAreaDto {}

export class UpdateAreaDto extends PartialType(CreateAreaDto){}