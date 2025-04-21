import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { SkillsService } from 'src/skills/skills.service';
import { Skill } from 'src/skills/entities/skill.entity';
import { SkillsController } from 'src/skills/skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Skill])],
  controllers: [ProjectController, SkillsController],
  providers: [ProjectService, SkillsService],
})
export class ProjectModule {}
