import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pais'})
export class Country {
  @PrimaryColumn({name: 'idpais', type:'int', nullable: false, primary: true})
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'BY DEFAULT'
  })
  id: number;
  @Column({name: 'nombre'})
  name: string;
}