import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Enem } from '../enem/enem.entity';
import { Subject } from '../subject/subject.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column()
  correctAnswer: string;

  @ManyToOne(() => Enem)
  @JoinColumn({ name: 'enem_id' })
  enem: Enem;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @Column()
  difficulty: string;
}
