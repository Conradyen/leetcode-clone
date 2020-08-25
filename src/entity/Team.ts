import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";

@Entity("team")
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  teamId: number;
  @Column("text")
  name: String;

  @OneToMany(() => User, (user) => user.id)
  member: User[];

  @OneToOne(() => User)
  @JoinColumn()
  owner: User;
}
