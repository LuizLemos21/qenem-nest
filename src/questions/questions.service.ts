import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<Question>,
  ) {}

  async createQuestion(questionText: string, correctAnswer: string): Promise<string> {
    const question = this.questionsRepository.create({ questionText, correctAnswer });
    await this.questionsRepository.save(question);
    return 'Question created successfully!';
  }

  async getAllQuestions(): Promise<Question[]> {
    return this.questionsRepository.find();
  }
}
