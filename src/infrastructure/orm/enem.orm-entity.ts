import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EnemOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;
}
