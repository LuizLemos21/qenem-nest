import { Question } from '../entities/question.entity';

export interface IQuestionRepository {
  findAll(subjectId?: number, enemId?: number, difficulty?: string, quantity?: number): Promise<Question[]>;
  findQuestionById(id: number): Promise<Question | undefined>;
  save(question: Question): Promise<Question>;
}
