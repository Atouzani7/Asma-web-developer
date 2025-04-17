import { Profile } from 'src/profile/entities/profile.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryColumn()
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
  profile: Profile;

  @OneToMany(() => Skill, (skill) => skill.projects)
  skill: Skill[];
}
