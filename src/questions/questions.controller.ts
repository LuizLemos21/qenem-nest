import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(
    @Query('subject_id') subjectId?: number,
    @Query('enem_id') enemId?: number,
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
    @Body('alternativaA') alternativaA: string,
    @Body('alternativaB') alternativaB: string,
    @Body('alternativaC') alternativaC: string,
    @Body('alternativaD') alternativaD: string,
    @Body('alternativaE') alternativaE: string,
    @Body('explanation') explanation: string,
  ): Promise<Question> {
    return this.questionsService.createQuestion(title, content, correctAnswer, subjectId, enemId, difficulty, alternativaA, alternativaB, alternativaC, alternativaD, alternativaE, explanation);
  }
}
