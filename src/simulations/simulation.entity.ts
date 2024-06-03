import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Simulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  simulationDate: Date;

  @ManyToOne(() => User, (user) => user.simulations)
  user: User;
}
