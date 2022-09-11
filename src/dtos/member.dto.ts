import { PartialType } from '@nestjs/mapped-types';

export class CreateMemberDto {}
export class UpdateMemberDto extends PartialType(CreateMemberDto) {}