import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { QuestionService } from '../../application/services/question.service';
import { Question } from '../../domain/entities/question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async findAll(
    @Query('subject_id') subjectId?: number,
    @Query('enem_id') enemId?: number,
    @Query('difficulty') difficulty?: string,
    @Query('quantity') quantity?: number,
  ): Promise<Question[]> {
    return this.questionService.findAll(subjectId, enemId, difficulty, quantity);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Post()
  async createQuestion(@Body() question: Question): Promise<Question> {
    return this.questionService.createQuestion(question);
  }
}
