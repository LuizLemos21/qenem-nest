import { Injectable } from '@nestjs/common';
import { SimulationRepository } from '../../infrastructure/repositories/simulation.repository';
import { Simulation } from '../../domain/entities/simulation.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class SimulationService {
  constructor(
    @InjectRepository(SimulationRepository)
    private readonly simulationRepository: SimulationRepository,
    ) {}

  async findAll(): Promise<Simulation[]> {
    return this.simulationRepository.findAll();
  }

  async findOne(id: number): Promise<Simulation> {
    return this.simulationRepository.findSimulationById(id);
  }

  async findByUserId(userId: number): Promise<Simulation[]> {
    return this.simulationRepository.findByUserId(userId);
  }

  async createSimulation(simulation: Simulation): Promise<Simulation> {
    return this.simulationRepository.save(simulation);
  }
}
