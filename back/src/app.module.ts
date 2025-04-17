import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { FormationModule } from './formation/formation.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [CompanyModule, FormationModule, ProfileModule, ProjectModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
