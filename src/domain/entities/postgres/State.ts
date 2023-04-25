import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('state')
export class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  uf: string;
}
