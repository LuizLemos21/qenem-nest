import { Injectable } from '@nestjs/common';
import { ISimulationRepository } from '../../domain/repositories/isimulation.repository';
import { Simulation } from '../../domain/entities/simulation.entity';

@Injectable()
export class SimulationService {
  constructor(private readonly simulationRepository: ISimulationRepository) {}

  async findAll(): Promise<Simulation[]> {
    return this.simulationRepository.findAll();
  }

  async findOne(id: number): Promise<Simulation> {
    return this.simulationRepository.findOne(id);
  }

  async findByUserId(userId: number): Promise<Simulation[]> {
    return this.simulationRepository.findByUserId(userId);
  }

  async createSimulation(simulation: Simulation): Promise<Simulation> {
    return this.simulationRepository.save(simulation);
  }
}
