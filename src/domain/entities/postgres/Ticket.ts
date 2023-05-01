import Route from '@modules/route/typeorm/entities/Route';
import User from '@modules/user/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ticket')
class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: User;

  @Column()
  route: Route;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Ticket;
