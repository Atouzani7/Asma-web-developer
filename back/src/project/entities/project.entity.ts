import { Profile } from 'src/profile/entities/profile.entity';
import { Skill } from 'src/skills/entities/skill.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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

  @Column({ nullable: true })
  details: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  video: string;

  @Column()
  link: string;

  @OneToMany(() => Profile, (profile) => profile.projects)
  profile: Profile[];

  @ManyToMany(() => Skill, (skill) => skill.project, { cascade: true })
  @JoinTable({
    name: 'project_skill', // 👈 nom de la table personnalisée
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'skill_id',
      referencedColumnName: 'id',
    },
  })
  skills: Skill[];
}
