import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, In, Repository } from 'typeorm';
import { SkillsService } from 'src/skills/skills.service';
import { Skill } from 'src/skills/entities/skill.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>, // <-- ICI LE PROBLÈME

    private readonly skillsService: SkillsService,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    // Récupérer tous les projets avec leurs compétences associées
    const projects = await this.projectRepository.find({
      relations: ['skills'],
    });
    // console.log('Projets récupérés:', projects);
    for (const project of projects) {
      console.log(project.skills.map((s) => s.name));
      // const skills = await this.skillsService.findAll();
      // console.log(
      //   'Skills récupérées:',
      //   skills.map((s) => s.name),
      // );
    }
    return await projects;
  }

  async findOne(id: number): Promise<Project> {
    return await this.projectRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    // console.log('DTO reçu pour update:', updateProjectDto);
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    // Mise à jour des champs simples
    project.name = updateProjectDto.name ?? project.name;
    project.description = updateProjectDto.description ?? project.description;
    project.image = updateProjectDto.image ?? project.image;
    project.link = updateProjectDto.link ?? project.link;
    project.details = updateProjectDto.details ?? project.details;
    project.skills = project.skills ?? project.skills;

    // Mise à jour des skills (relation)
    if (updateProjectDto.skill && Array.isArray(updateProjectDto.skill)) {
      const skillEntities = await this.skillRepository.find({
        where: { id: In(updateProjectDto.skill) },
      });
      project.skills = skillEntities;
    }

    console.log('Mise à jour du projet:', project);

    const updatedProject = await this.projectRepository.save(project);
    return updatedProject;
  }

  async remove(id: number): Promise<DeleteResult> {
    const project = await this.findOne(id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return await this.projectRepository.delete(id);
  }
}
