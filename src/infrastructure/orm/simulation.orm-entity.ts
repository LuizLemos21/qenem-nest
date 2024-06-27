import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class SimulationOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  subjectId: number;

  @Column()
  difficulty: string;

  @Column()
  score: number;

  @CreateDateColumn()
  createdAt: Date;
}
