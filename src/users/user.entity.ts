import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Simulation } from '../simulations/simulation.entity';
import { Feedback } from '../feedback/feedback.entity';

@Entity()
export class User {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Simulation, (simulation) => simulation.user)
  simulations: Simulation[];

  @OneToMany(() => Feedback, (feedback) => feedback.user)
  feedbacks: Feedback[];
}
