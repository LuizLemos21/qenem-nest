import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  feedbackText: string;

  @ManyToOne(() => User, (user) => user.feedbacks)
  user: User;
}
