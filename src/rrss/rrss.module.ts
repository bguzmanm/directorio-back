import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rrss } from "./rrss.entity";
import { RrssController } from "./rrss.controller";
import { RrssService } from "./rrss.service";

@Module({
  imports: [TypeOrmModule.forFeature([Rrss])],
  controllers: [RrssController],
  providers: [RrssService]
})
export class RrssModule {}
