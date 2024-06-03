import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Simulation } from '../simulations/simulation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Simulation, (simulation) => simulation.user)
  simulations: Simulation[];
}
