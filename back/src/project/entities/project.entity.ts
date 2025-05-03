import { Profile } from 'src/profile/entities/profile.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @OneToMany(() => Profile, (profile) => profile.projects)
  profile: Profile[];

  @OneToMany(() => Skill, (skill) => skill.project, { cascade: true })
  skill: Skill[];
}
