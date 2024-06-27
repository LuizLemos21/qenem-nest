import { Injectable } from '@nestjs/common';
import { IEnemRepository } from '../../domain/repositories/ienem.repository';
import { Enem } from '../../domain/entities/enem.entity';

@Injectable()
export class EnemService {
  constructor(private readonly enemRepository: IEnemRepository) {}

  async findAll(): Promise<Enem[]> {
    return this.enemRepository.findAll();
  }

  async findOne(id: number): Promise<Enem> {
    return this.enemRepository.findOne(id);
  }

  async createEnem(enem: Enem): Promise<Enem> {
    return this.enemRepository.save(enem);
  }
}
