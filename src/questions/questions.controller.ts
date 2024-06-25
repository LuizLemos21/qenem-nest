import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(
    @Query('subject') subject?: string,
    @Query('difficulty') difficulty?: string,
    @Query('quantity') quantity?: number,
  ): Promise<Question[]> {
    return this.questionsService.findAll(subject, difficulty, quantity);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Question> {
    return this.questionsService.findOne(id);
  }

  @Post()
  async createQuestion(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('correctAnswer') correctAnswer: string,
    @Body('subject') subject: string,
    @Body('difficulty') difficulty: string,
  ): Promise<Question> {
    return this.questionsService.createQuestion(title, content, correctAnswer, subject, difficulty);
  }
}
