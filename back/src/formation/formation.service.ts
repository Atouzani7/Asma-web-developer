import { Body, Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Formation } from './entities/formation.entity';

@Injectable()
export class FormationService {
  constructor(
    @InjectRepository(Formation)
    private readonly formationRepository: Repository<Formation>,
  ) {}

  async create(
    @Body() createFormationDto: CreateFormationDto,
  ): Promise<Formation> {
    const formation = await this.formationRepository.create(createFormationDto);
    console.log('par ici le service', formation);
    return await this.formationRepository.save(formation);
  }

  findAll(): Promise<Formation[]> {
    return this.formationRepository.find();
  }

  findOne(id: number): Promise<Formation> {
    return this.formationRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateFormationDto: UpdateFormationDto,
  ): Promise<Formation> {
    const formation = await this.findOne(id);
    Object.assign(formation, updateFormationDto);
    return await this.formationRepository.save(formation);
  }

  remove(id: number): Promise<DeleteResult> {
    const formation = this.findOne(id);
    if (!formation) {
      throw new Error('Formation not found');
    }
    return this.formationRepository.delete(id);
  }
}
