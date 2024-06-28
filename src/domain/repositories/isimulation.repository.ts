import { Simulation } from '../entities/simulation.entity';

export interface ISimulationRepository {
  findAll(): Promise<Simulation[]>;
  findSimulationById(id: number): Promise<Simulation | undefined>;
  findByUserId(userId: number): Promise<Simulation[]>;
  save(simulation: Simulation): Promise<Simulation>;
}
