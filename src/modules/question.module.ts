import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from '../infrastructure/repositories/question.repository';
import { QuestionService } from '../application/services/question.service';
import { QuestionController } from '../presentation/controllers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
