import { Profile } from 'src/profile/entities/profile.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Formation {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  school: string;

  @Column()
  starDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne(() => Profile, (profile) => profile.formations)
  profile: Profile;
}
