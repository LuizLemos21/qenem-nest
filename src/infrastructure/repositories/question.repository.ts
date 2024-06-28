import { Repository, EntityRepository } from 'typeorm';
import { QuestionOrmEntity } from '../orm/question.orm-entity';
import { IQuestionRepository } from '../../domain/repositories/iquestion.repository';
import { Question } from '../../domain/entities/question.entity';

@EntityRepository(QuestionOrmEntity)
export class QuestionRepository extends Repository<QuestionOrmEntity> implements IQuestionRepository {
  async findAll(subjectId?: number, enemId?: number, difficulty?: string, quantity?: number): Promise<Question[]> {
    const query = this.createQueryBuilder('question')
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

    const ormQuestions = await query.getMany();
    return ormQuestions.map(ormQuestion => this.toDomain(ormQuestion));
  }

  async findQuestionById(id: number): Promise<Question | undefined> {
    const ormQuestion = await this.findOne({ where: { id }, relations: ['subject', 'enem'] });
    return ormQuestion ? this.toDomain(ormQuestion) : undefined;
  }

  async saveQuestion(question: Question): Promise<Question> {
    const ormQuestion = this.create(question);
    const savedOrmQuestion = await this.save(ormQuestion);
    return this.toDomain(savedOrmQuestion);
  }

  private toDomain(ormQuestion: QuestionOrmEntity): Question {
    return new Question(
      ormQuestion.id,
      ormQuestion.title,
      ormQuestion.content,
      ormQuestion.image,
      ormQuestion.correctAnswer,
      ormQuestion.subject.id,
      ormQuestion.enem.id,
      ormQuestion.difficulty,
      ormQuestion.alternativaA,
      ormQuestion.alternativaB,
      ormQuestion.alternativaC,
      ormQuestion.alternativaD,
      ormQuestion.alternativaE,
      ormQuestion.explanation,
    );
  }
}
