import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "../country/country.entity";

@Entity()
export class City {

  @PrimaryColumn({name: 'idciudad', type: "int", nullable: false, primary: true})
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: "BY DEFAULT"
  })
  id: number;
  @Column({
    name: 'nombre'
  })
  name: string;

  @ManyToOne(type => Country)
  @JoinColumn({name: 'idpais'})
  country: Country;

}