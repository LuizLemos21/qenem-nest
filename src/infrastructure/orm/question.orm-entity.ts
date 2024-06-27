import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EnemOrmEntity } from './enem.orm-entity';
import { SubjectOrmEntity } from './subject.orm-entity';

@Entity()
export class QuestionOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  correctAnswer: string;

  @ManyToOne(() => SubjectOrmEntity)
  @JoinColumn({ name: 'subject_id' })
  subject: SubjectOrmEntity;

  @ManyToOne(() => EnemOrmEntity)
  @JoinColumn({ name: 'enem_id' })
  enem: EnemOrmEntity;

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
  explanation: string;
}
