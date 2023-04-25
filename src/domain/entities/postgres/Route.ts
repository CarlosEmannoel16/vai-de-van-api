import { City } from '@entities/postgres';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('route')
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => City)
  @Column()
  // @JoinColumn()
  // origin: City;

  // @OneToOne(type => City)
  // @Column()
  // @JoinColumn()
  // destiny: City;
  @Column()
  departure_time: string;

  @Column()
  value: number;

  @Column()
  km: number;

  @Column()
  subRoute: boolean;

  @Column()
  idRouteMain: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
