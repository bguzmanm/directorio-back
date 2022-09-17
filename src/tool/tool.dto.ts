import { PartialType } from '@nestjs/mapped-types';

export class CreateToolDto {}

export class UpdateToolDto extends PartialType(CreateToolDto) {}
