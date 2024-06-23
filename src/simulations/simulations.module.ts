import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulationsService } from './simulations.service';
import { SimulationsController } from './simulations.controller';
import { Simulation } from './simulation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Simulation])],
  providers: [SimulationsService],
  controllers: [SimulationsController],
})
export class SimulationsModule {}
