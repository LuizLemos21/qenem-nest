import { Enem } from '../entities/enem.entity';

export interface IEnemRepository {
  findAll(): Promise<Enem[]>;
  findOne(id: number): Promise<Enem | undefined>;
  save(enem: Enem): Promise<Enem>;
}
