import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tipo_herramienta'})
export class ToolType {
  @PrimaryGeneratedColumn('identity')
  @Column({
    name: 'idtipo_herramienta'
  })
  id: number;

  @Column({
    name: 'descripcion'
  })
  description: string;
}
