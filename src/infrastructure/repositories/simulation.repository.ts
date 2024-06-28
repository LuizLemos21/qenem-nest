import { Repository, EntityRepository } from 'typeorm';
import { SimulationOrmEntity } from '../orm/simulation.orm-entity';
import { ISimulationRepository } from '../../domain/repositories/isimulation.repository';
import { Simulation } from '../../domain/entities/simulation.entity';

@EntityRepository(SimulationOrmEntity)
export class SimulationRepository extends Repository<SimulationOrmEntity> implements ISimulationRepository {
  async findAll(): Promise<Simulation[]> {
    const ormSimulations = await this.find();
    return ormSimulations.map(ormSimulation => this.toDomain(ormSimulation));
  }

  async findSimulationById(id: number): Promise<Simulation | undefined> {
    const ormSimulation = await this.findOne({ where: { id } });
    return ormSimulation ? this.toDomain(ormSimulation) : undefined;
  }

  async findByUserId(userId: number): Promise<Simulation[]> {
    const ormSimulations = await this.find({ where: { userId } });
    return ormSimulations.map(ormSimulation => this.toDomain(ormSimulation));
  }

  async saveSimulation(simulation: Simulation): Promise<Simulation> {
    const ormSimulation = this.create(simulation);
    const savedOrmSimulation = await this.save(ormSimulation);
    return this.toDomain(savedOrmSimulation);
  }

  private toDomain(ormSimulation: SimulationOrmEntity): Simulation {
    return new Simulation(
      ormSimulation.id,
      ormSimulation.userId,
      ormSimulation.subjectId,
      ormSimulation.difficulty,
      ormSimulation.score,
      ormSimulation.createdAt,
    );
  }
}
