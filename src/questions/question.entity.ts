import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Subject } from '../subjects/subject.entity';

@Entity()
export class Question {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionText: string;

  @Column()
  correctAnswer: string;

  @ManyToOne(() => Subject, (subject) => subject.questions)
  subject: Subject;
}
