import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity({name: 'usuario'})
export class UserEntity {

  @PrimaryColumn({type: "string", nullable: false, primary: true})
  username: string;
  @Column({name: "nombre"})
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ name: 'fecha', type: 'timestamp' })
  date: Date;

  @ManyToMany(() => Role)
  @JoinTable({name: 'rol_usuario'})
  roles: Role[];

}