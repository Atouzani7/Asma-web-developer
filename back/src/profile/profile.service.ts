import { Body, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = await this.profileRepository.create(createProfileDto);
    return await this.profileRepository.save(createProfileDto);
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileRepository.find();
  }

  findOne(id: number): Promise<Profile> {
    return this.profileRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile = await this.findOne(id);
    Object.assign(profile, updateProfileDto);
    return await this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<DeleteResult> {
    const profile = await this.findOne(id);
    return this.profileRepository.delete(id);
  }
}
