import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";
import { Channel } from "./Channel";

@Entity("Message")
export class Message extends BaseEntity {
  @Column("text")
  text: String;

  @PrimaryColumn()
  senderId: number;
  @ManyToOne(() => User, (user) => user.msgSend)
  @JoinColumn({ name: "senderId" })
  user: User;

  @PrimaryColumn()
  channelId: number;
  @ManyToOne(() => Channel, (channel) => channel.channelId)
  @JoinColumn({ name: "channelId" })
  channel: Channel;
}
