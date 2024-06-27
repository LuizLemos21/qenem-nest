import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SimulationService } from '../../application/services/simulation.service';
import { Simulation } from '../../domain/entities/simulation.entity';

@Controller('simulations')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) {}

  @Get()
  async findAll(): Promise<Simulation[]> {
    return this.simulationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Simulation> {
    return this.simulationService.findOne(id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: number): Promise<Simulation[]> {
    return this.simulationService.findByUserId(userId);
  }

  @Post()
  async createSimulation(@Body() simulation: Simulation): Promise<Simulation> {
    return this.simulationService.createSimulation(simulation);
  }
}
