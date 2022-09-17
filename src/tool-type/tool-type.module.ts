import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ToolType } from "./tool-type.entity";
import { ToolTypeController } from "./tool-type.controller";
import { ToolTypeService } from "./tool-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([ToolType])],
  controllers: [ToolTypeController],
  providers: [ToolTypeService]
})
export class ToolTypeModule {}
