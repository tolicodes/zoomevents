import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import Tag from "./Tag";
import BaseEntity from "../BaseEntity";

@Entity()
export default class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  header_image: string;

  @Column({
    type: "text"
  })
  description: string;

  @Column("datetime")
  date_start: Date;

  @Column("datetime")
  date_end: Date;

  @Column()
  creator: string;

  @Column()
  rsvp_link: string;

  @Column()
  slug: string;

  @Column()
  zoom_link: string;

  @ManyToMany(() => Tag, {
    cascade: true,
    eager: true
  })
  @JoinTable()
  tags: Tag[];
}
