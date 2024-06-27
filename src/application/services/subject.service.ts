import { Injectable } from '@nestjs/common';
import { ISubjectRepository } from '../../domain/repositories/isubject.repository';
import { Subject } from '../../domain/entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(private readonly subjectRepository: ISubjectRepository) {}

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.findAll();
  }

  async findOne(id: number): Promise<Subject> {
    return this.subjectRepository.findOne(id);
  }

  async createSubject(subject: Subject): Promise<Subject> {
    return this.subjectRepository.save(subject);
  }
}
