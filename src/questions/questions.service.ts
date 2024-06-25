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

  async findAll(): Promise<Question[]> {
    return this.questionsRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionsRepository.findOneBy({ id });
  }

  async createQuestion(title: string, content: string, correctAnswer: string): Promise<Question> {
    const question = this.questionsRepository.create({ title, content, correctAnswer });
    return this.questionsRepository.save(question);
  }
}
