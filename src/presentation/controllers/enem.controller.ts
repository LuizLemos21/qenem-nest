import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EnemService } from '../../application/services/enem.service';
import { Enem } from '../../domain/entities/enem.entity';

@Controller('enems')
export class EnemController {
  constructor(private readonly enemService: EnemService) {}

  @Get()
  async findAll(): Promise<Enem[]> {
    return this.enemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Enem> {
    return this.enemService.findOneById(id);
  }

  @Post()
  async createEnem(@Body() enem: Enem): Promise<Enem> {
    return this.enemService.create(enem);
  }
}
