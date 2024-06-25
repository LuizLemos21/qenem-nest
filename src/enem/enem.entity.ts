import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Enem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ano: number;

}
