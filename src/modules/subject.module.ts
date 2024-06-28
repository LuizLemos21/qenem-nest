import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectService } from '../application/services/subject.service';
import { SubjectRepository } from '../infrastructure/repositories/subject.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectRepository])],
  providers: [SubjectService],
  exports: [SubjectService],
})
export class SubjectModule {}
