import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Formation } from 'src/formation/entities/formation.entity';
import { Project } from 'src/project/entities/project.entity';
import { Skill } from 'src/skills/entities/skill.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  contact: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  cv: string;

  @Column({ nullable: true })
  logo: string;

  @ManyToMany(() => Skill, (skill) => skill.profiles)
  @JoinTable()
  skills: Skill[];

  @OneToMany(() => Company, (company) => company.profile)
  company: Company[];

  @OneToMany(() => Formation, (formation) => formation.profile)
  formations: Formation[];

  @OneToMany(() => Project, (project) => project.profile)
  projects: Project[];
}
