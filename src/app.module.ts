import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from "./controllers/member.controller";
import { ToolController } from "./controllers/tool.controller";
import { MemberService } from "./services/member.service";
import { ToolService } from "./services/tool.service";
import { ToolTypeService } from "./services/tool-type.service";
import { ToolTypeController } from "./controllers/tool-type.controller";
import { RrssController } from './controllers/rrss.controller';
import { RrssService } from "./services/rrss.service";
import { AreaService } from './services/area.service';
import { AreaController } from './controllers/area.controller';
import { CountryService } from './services/country.service';
import { CountryController } from './controllers/country.controller';
import { CityController } from './controllers/city.controller';
import { CityService } from './services/city.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    MemberController,
    ToolController,
    ToolTypeController,
    RrssController,
    AreaController,
    CountryController,
    CityController
  ],
  providers: [
    AppService,
    MemberService,
    ToolService,
    ToolTypeService,
    RrssService,
    AreaService,
    CountryService,
    CityService
  ],
})
export class AppModule {}
