import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
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
  ): Promise<Question> {
    return this.questionsService.createQuestion(title, content, correctAnswer);
  }
}
