import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  image: string;

  @Column()
  poste: string;

  @Column()
  secteur: string;

  @Column({ nullable: true })
  starDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne(() => Profile, (profile) => profile.company)
  profile: Profile;
}
