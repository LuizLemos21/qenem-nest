import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectRepository } from '../infrastructure/repositories/subject.repository';
import { SubjectService } from '../application/services/subject.service';
import { SubjectController } from '../presentation/controllers/subject.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectRepository])],
  providers: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
