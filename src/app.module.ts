import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { AreaModule } from './area/area.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { MemberModule } from './member/member.module';
import { RoleModule } from './role/role.module';
import { RrssModule } from './rrss/rrss.module';
import { ToolModule } from './tool/tool.module';
import { ToolTypeModule } from './tool-type/tool-type.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    AreaModule,
    CityModule,
    CountryModule,
    MemberModule,
    RoleModule,
    RrssModule,
    ToolModule,
    ToolTypeModule,
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
