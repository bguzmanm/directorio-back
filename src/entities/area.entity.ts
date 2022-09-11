import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {
  @PrimaryColumn({name: 'idarea', type: "int", nullable: false, primary: true})
  @PrimaryGeneratedColumn("identity", {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({
    name: 'nombre'
  })
  name: string;
}