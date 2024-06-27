import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnemRepository } from '../infrastructure/repositories/enem.repository';
import { EnemService } from '../application/services/enem.service';
import { EnemController } from '../presentation/controllers/enem.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EnemRepository])],
  providers: [EnemService],
  controllers: [EnemController],
})
export class EnemModule {}
