import { State } from '@entities/postgres/';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // @ManyToOne(type => State, cities => City)
  // @Column()
  // state: State;
}
