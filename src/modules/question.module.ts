import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from '../infrastructure/repositories/question.repository';
import { QuestionService } from '../application/services/question.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository])],
  providers: [QuestionService],
})
export class QuestionModule {}
