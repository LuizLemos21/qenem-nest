import { Controller, Post, Get, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('create')
  async createQuestion(@Body() body: { questionText: string; correctAnswer: string }): Promise<string> {
    return this.questionsService.createQuestion(body.questionText, body.correctAnswer);
  }

  @Get()
  async getAllQuestions(): Promise<any> {
    return this.questionsService.getAllQuestions();
  }
}
