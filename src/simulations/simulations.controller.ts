import { Controller, Post, Get, Body } from '@nestjs/common';
import { SimulationsService } from './simulations.service';

@Controller('simulations')
export class SimulationsController {
  constructor(private readonly simulationsService: SimulationsService) {}
/*
  @Post('create')
  async createSimulation(@Body() body: { userId: number }): Promise<string> {
    return this.simulationsService.createSimulation(body.userId);
  }

  @Get()
  async getAllSimulations(): Promise<any> {
    return this.simulationsService.getAllSimulations();
  }*/
}
