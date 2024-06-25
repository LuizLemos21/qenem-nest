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

  async findAll(subject?: string, difficulty?: string, quantity?: number): Promise<Question[]> {
    const query = this.questionsRepository.createQueryBuilder('question');

    if (subject) {
      query.andWhere('question.subject = :subject', { subject });
    }

    if (difficulty) {
      query.andWhere('question.difficulty = :difficulty', { difficulty });
    }

    if (quantity) {
      query.limit(quantity);
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionsRepository.findOneBy({ id });
  }

  async createQuestion(title: string, content: string, correctAnswer: string, subject: string, difficulty: string): Promise<Question> {
    const question = this.questionsRepository.create({ title, content, correctAnswer, subject, difficulty });
    return this.questionsRepository.save(question);
  }
}
