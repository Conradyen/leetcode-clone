import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Team } from "./team";

@Entity("Channel")
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  channelId: number;
  @Column("text")
  name: String;
  @Column("boolean")
  public: boolean;

  @OneToOne(() => Team)
  @JoinColumn()
  team: Team;
}
