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
    try {
      await this.profileRepository.save(profile);
    } catch (error) {
      throw new Error('Error creating profile: ' + error.message);
    }
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
    try {
      await this.profileRepository.save(profile);
    } catch (error) {
      throw new Error('Error updating profile: ' + error.message);
    }
    return await this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<DeleteResult> {
    const profile = await this.findOne(id);
    if (!profile) {
      throw new Error(`Profile with ID ${id} not found`);
    }
    return this.profileRepository.delete(id);
  }
}
