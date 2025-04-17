import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Project } from 'src/project/entities/project.entity';
import { Profile } from 'src/profile/entities/profile.entity';

enum Category {
  BACKEND = 'backend',
  FRONTEND = 'frontend',
  MOBILE = 'mobile',
  DEVOPS = 'devops',
  AGILE = 'agile',
}

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Category })
  category: Category;

  @ManyToMany(() => Project, (project) => project.skill)
  projects: Project[];

  @ManyToMany(() => Profile, (profile) => profile.skills)
  profiles: Profile[];
}
