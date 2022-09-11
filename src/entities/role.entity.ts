import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'rol'})
export class Role {
  @PrimaryColumn({name: 'idrol', type: "int", nullable: false, primary: true})
  @PrimaryGeneratedColumn("identity", {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({name: 'nombre'})
  name: string;
}