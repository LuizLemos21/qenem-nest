import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Simulation } from './simulation.entity';

@Injectable()
export class SimulationsService {
  constructor(
    @InjectRepository(Simulation)
    private simulationsRepository: Repository<Simulation>,
  ) {}

  async createSimulation(userId: number): Promise<string> {
    const simulation = this.simulationsRepository.create({ user: { id: userId }, simulationDate: new Date() });
    await this.simulationsRepository.save(simulation);
    return 'Simulation created successfully!';
  }

  async getAllSimulations(): Promise<Simulation[]> {
    return this.simulationsRepository.find({ relations: ['user'] });
  }
}
