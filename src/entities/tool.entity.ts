import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import { ToolType } from "./tool-type.entity";

@Entity({name: 'herramienta'})
export class Tool {
  @PrimaryColumn({name: 'idherramienta', type: 'int', nullable: false, primary: true})
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({
    name: 'nombre'
  })
  name: string;
  url: string;
  img: string;
  @ManyToOne(type => ToolType)
  @JoinColumn({name: 'idtipo_herramienta'})
  toolType: ToolType;
}
