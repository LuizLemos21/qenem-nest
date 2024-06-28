import { Repository, EntityRepository } from 'typeorm';
import { EnemOrmEntity } from '../orm/enem.orm-entity';
import { IEnemRepository } from '../../domain/repositories/ienem.repository';
import { Enem } from '../../domain/entities/enem.entity';

@EntityRepository(EnemOrmEntity)
export class EnemRepository extends Repository<EnemOrmEntity> implements IEnemRepository {
  async findAll(): Promise<Enem[]> {
    const ormEnems = await this.find();
    return ormEnems.map(ormEnem => this.toDomain(ormEnem));
  }

  async findEnemById(id: number): Promise<Enem | undefined> {
    const ormEnem = await this.findOne({ where: { id } });
    return ormEnem ? this.toDomain(ormEnem) : undefined;
  }

  async saveEnem(enem: Enem): Promise<Enem> {
    const ormEnem = this.create(enem);
    const savedOrmEnem = await this.save(ormEnem);
    return this.toDomain(savedOrmEnem);
  }

  private toDomain(ormEnem: EnemOrmEntity): Enem {
    return new Enem(
      ormEnem.id,
      ormEnem.year,
    );
  }
}
