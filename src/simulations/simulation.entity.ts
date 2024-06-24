import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Answer } from '../answers/answer.entity';

@Entity()
export class Simulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  simulationDate: Date;

 /* @ManyToOne(() => User, (user) => user.simulations)
  user: User;
*/
  @OneToMany(() => Answer, (answer) => answer.simulation)
  answers: Answer[];
}
