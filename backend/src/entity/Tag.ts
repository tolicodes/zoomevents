import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import BaseEntity from "../BaseEntity";

@Entity()
export default class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
