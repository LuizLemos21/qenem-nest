import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationRepository } from '../infrastructure/repositories/simulation.repository';
import { SimulationService } from '../application/services/simulation.service';
import { SimulationController } from '../presentation/controllers/simulation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SimulationRepository])],
  providers: [SimulationService],
  controllers: [SimulationController],
})
export class SimulationModule {}
