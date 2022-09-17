import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rrss {
  @PrimaryColumn({ name: 'idrrss', type: "int", nullable: false, primary: true })
  @PrimaryGeneratedColumn("identity", {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({name: 'nombre'})
  name: string;
  @Column()
  url: string;
  @Column()
  logo: string;
}