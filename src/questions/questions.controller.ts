import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(
    @Query('subjectId') subjectId?: number,
    @Query('enemId') enemId?: number,
    @Query('difficulty') difficulty?: string,
    @Query('quantity') quantity?: number,
  ): Promise<Question[]> {
    return this.questionsService.findAll(subjectId, enemId, difficulty, quantity);
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
    @Body('subjectId') subjectId: number,
    @Body('enemId') enemId: number,
    @Body('difficulty') difficulty: string,
  ): Promise<Question> {
    return this.questionsService.createQuestion(title, content, correctAnswer, subjectId, enemId, difficulty);
  }
}
