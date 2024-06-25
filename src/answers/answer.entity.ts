import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Simulation } from '../simulations/simulation.entity';
import { Question } from '../questions/question.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answerText: string;

  @ManyToOne(() => Simulation, (simulation) => simulation.answers)
  simulation: Simulation;

  @ManyToOne(() => Question, (question) => question.correctAnswer)
  question: Question;
}
