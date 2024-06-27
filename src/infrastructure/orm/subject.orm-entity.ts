import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubjectOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
