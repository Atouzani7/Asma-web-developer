import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Profile } from 'src/profile/entities/profile.entity';

enum Category {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  TEST = 'test',
  DEVOPS = 'devops',
  AGILE = 'agile',
  FULLSTACK = 'fullstack',
  DESIGN = 'design UI / UX',
}

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Category })
  category: Category = Category.BACKEND;

  @Column()
  image: string;

  // @ManyToMany(() => Project, (project) => project.skill)
  // projects: Project[];
  @ManyToOne(() => Project, (project) => project.skill)
  project: Project;

  @ManyToMany(() => Profile, (profile) => profile.skills)
  profiles: Profile[];
}
