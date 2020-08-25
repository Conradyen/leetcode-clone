import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Team } from "./Team";
import { Message } from "./Message";
@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int", { default: 0 })
  count: number;

  @Column("text")
  firstName: string;

  @Column("text")
  lastName: string;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @OneToMany(() => Team, (team) => team.teamId)
  teams: Team[];

  @OneToMany(() => Message, (Message) => Message.user)
  msgSend: Message[];
}
