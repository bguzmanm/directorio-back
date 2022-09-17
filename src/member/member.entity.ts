import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { Rrss } from "../rrss/rrss.entity";
import { Tool } from "../tool/tool.entity";
import { Area } from "../area/area.entity";
import { City } from "../city/city.entity";
import { User } from "../user/user.entity";

@Entity({name: 'miembro'})
export class Member {
  @PrimaryColumn({name: 'idmiembro', type: 'int', nullable: false, primary: true})
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({
    name: 'nombre'
  })
  name: string;
  @Column()
  email: string;
  @Column()
  resumen: string;
  @Column()
  img: string;
  @Column()
  linkedin: string;

  @ManyToMany(() => Rrss)
  @JoinTable({name: 'registro_rrss'})
  rrss: Rrss[];

  @ManyToMany(()=> Tool)
  @JoinTable({name: "registro_herramienta"})
  tools: Tool[];
  @ManyToMany(() => Area)
  @JoinTable({name: 'registro_area'})
  areas: Area[];

  @ManyToOne(type => City)
  @JoinColumn({name: 'idciudad'})
  city: City;

  @ManyToOne(type => User)
  @JoinColumn({name: 'username'})
  user: User;

}
