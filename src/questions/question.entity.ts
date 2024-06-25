import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Enem } from '../enem/enem.entity';
import { Subject } from '../subjects/subject.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  image: string; // Assuming image will be stored as a base64 string

  @Column()
  correctAnswer: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @ManyToOne(() => Enem)
  @JoinColumn({ name: 'enem_id' })
  enem: Enem;

  @Column()
  difficulty: string;

  @Column({ nullable: true })
  alternativaA: string;

  @Column({ nullable: true })
  alternativaB: string;

  @Column({ nullable: true })
  alternativaC: string;

  @Column({ nullable: true })
  alternativaD: string;

  @Column({ nullable: true })
  alternativaE: string;

  @Column({ nullable: true })
  explanation: string; // textoResposta
}
