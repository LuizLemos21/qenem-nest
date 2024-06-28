import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from '../../infrastructure/repositories/question.repository';
import { Question } from '../../domain/entities/question.entity';

@Injectable()
export class QuestionService {

   constructor(
    @InjectRepository(QuestionRepository)
    private readonly questionRepository: QuestionRepository,
  ) {}

  async findAll(subjectId?: number, enemId?: number, difficulty?: string, quantity?: number): Promise<Question[]> {
    return this.questionRepository.findAll(subjectId, enemId, difficulty, quantity);
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionRepository.findQuestionById(id);
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }
    return question;
  }

  async createQuestion(question: Question): Promise<Question> {
    return this.questionRepository.save(question);
  }
}
