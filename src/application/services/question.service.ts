import { Injectable } from '@nestjs/common';
import { IQuestionRepository } from '../../domain/repositories/iquestion.repository';
import { Question } from '../../domain/entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(private readonly questionRepository: IQuestionRepository) {}

  async findAll(subjectId?: number, enemId?: number, difficulty?: string, quantity?: number): Promise<Question[]> {
    return this.questionRepository.findAll(subjectId, enemId, difficulty, quantity);
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionRepository.findOne(id);
    if (!question) {
      throw new Error(`Question with ID ${id} not found`);
    }
    return question;
  }

  async createQuestion(question: Question): Promise<Question> {
    return this.questionRepository.save(question);
  }
}
