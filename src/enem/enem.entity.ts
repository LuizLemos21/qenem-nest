import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  
  @Column()
  test: string;
}
