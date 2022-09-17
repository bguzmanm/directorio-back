import { Injectable } from '@nestjs/common';
import { UpdateToolTypeDto, CreateToolTypeDto } from './tool-type.dto';

@Injectable()
export class ToolTypeService {
  create(createToolTypeDto: CreateToolTypeDto) {
    return 'This action adds a new toolType';
  }

  findAll() {
    return `This action returns all toolType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toolType`;
  }

  update(id: number, updateToolTypeDto: UpdateToolTypeDto) {
    return `This action updates a #${id} toolType`;
  }

  remove(id: number) {
    return `This action removes a #${id} toolType`;
  }
}
