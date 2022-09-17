import { PartialType } from '@nestjs/mapped-types';

export class CreateToolTypeDto {}
export class UpdateToolTypeDto extends PartialType(CreateToolTypeDto) {}
