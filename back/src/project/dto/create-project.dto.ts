import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  details?: string;

  @IsString()
  @IsOptional()
  link?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto) // Tu dois définir ce DTO si tu veux gérer les objets Skill
  @IsOptional()
  skill?: SkillDto[]; // 👈 ou juste des IDs : number[]
}

export class SkillDto {
  @IsNotEmpty()
  id: number;
}
