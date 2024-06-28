import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnemRepository } from '../../infrastructure/repositories/enem.repository';
import { Enem } from '../../domain/entities/enem.entity';

@Injectable()
export class EnemService {
  constructor(
    @InjectRepository(EnemRepository) private readonly enemRepository: EnemRepository,
  ) {}

  async findAll(): Promise<Enem[]> {
    return this.enemRepository.findAll();
  }

  async findOneById(id: number): Promise<Enem> {
    const enem = await this.enemRepository.findEnemById(id);
    if (!enem) {
      throw new NotFoundException(`Enem with ID ${id} not found`);
    }
    return enem;
  }

  async create(enem: Enem): Promise<Enem> {
    return this.enemRepository.saveEnem(enem);
  }
}
