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

  async findAll(subjectId?: number, enemId?: number, difficulty?: string, quantity?: number): Promise<Question[]> {
    const query = this.questionsRepository.createQueryBuilder('question')
      .leftJoinAndSelect('question.subject', 'subject')
      .leftJoinAndSelect('question.enem', 'enem');

    if (subjectId) {
      query.andWhere('question.subject_id = :subjectId', { subjectId });
    }

    if (enemId) {
      query.andWhere('question.enem_id = :enemId', { enemId });
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
    return this.questionsRepository.findOne({
      where: { id },
      relations: ['subject', 'enem']
    });
  }

  async createQuestion(
    title: string, content: string, correctAnswer: string, subjectId: number, enemId: number,
    difficulty: string, alternativaA: string, alternativaB: string, alternativaC: string,
    alternativaD: string, alternativaE: string, explanation: string,
  ): Promise<Question> {
    const question = this.questionsRepository.create({
      title, content, correctAnswer, subject: { id: subjectId }, enem: { id: enemId },
      difficulty, alternativaA, alternativaB, alternativaC, alternativaD, alternativaE, explanation,
    });
    return this.questionsRepository.save(question);
  }
}
