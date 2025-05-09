import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { FormationModule } from './formation/formation.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';
import { Profile } from './profile/entities/profile.entity';
import { Company } from './company/entities/company.entity';
import { Formation } from './formation/entities/formation.entity';
import { Project } from './project/entities/project.entity';
import { Skill } from './skills/entities/skill.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE || env.DB_DATABASE,
      // autoLoadEntities: true,
      synchronize: true,
      entities: [Profile, Project, Company, Formation, Skill],
    }),
    ProfileModule,
    SkillsModule,
    ProjectModule,
    CompanyModule,
    FormationModule,
  ],
  // imports: [CompanyModule, FormationModule, ProfileModule, ProjectModule, SkillsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
